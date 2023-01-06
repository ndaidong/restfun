// index.js

import http, { STATUS_CODES, METHODS } from 'node:http'
import querystring from 'node:querystring'
import { EventEmitter } from 'node:events'

import { isFunction, genid, sort } from 'bellajs'

const MIME_TYPES = {
  stream: 'application/octet-stream',
  html: 'text/html; charset=utf-8',
  text: 'text/plain',
  css: 'text/css',
  js: 'text/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  webp: 'image/webp',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
}

const TYPES_FOR_BODY_PARSER = [
  'application/json',
  'application/x-www-form-urlencoded',
]

const SIM_BASE_URL = `http://rest-${genid(80)}.fun`

const doNothing = () => {}

const getIp = (req) => {
  const { headers = {}, connection = {}, socket = {} } = req
  const remoteAddress = connection.remoteAddress || socket.remoteAddress
  const socketAddress = connection.socket?.remoteAddress
  return headers['x-forwarded-for'] || remoteAddress || socketAddress || ''
}

const addRequestProperties = (req) => {
  req.method = req.method.toUpperCase()
  req.ip = getIp(req)
  req.params = {}
  req.body = {}

  const url = new URL(req.url, SIM_BASE_URL)
  req.path = url.pathname
  req.query = querystring.parse(url.searchParams.toString())
  req._url = url
}

const addResponseMethods = (req, res) => {
  res.status = (code = 200) => {
    if (!res.writableEnded) {
      res.statusCode = code
    }
    return res
  }

  res.type = (ct = 'text') => {
    if (!res.writableEnded) {
      res.setHeader('Content-Type', MIME_TYPES[ct] || ct)
    }
    return res
  }

  res.send = (val) => {
    if (res.writableEnded) {
      return res
    }
    const ct = res.getHeader('content-type')
    if (!ct) {
      res.type('text')
    }
    res.end(val)
  }

  res.html = (html) => {
    res.type('html').send(html)
  }

  res.json = (data) => {
    res.type('json').send(JSON.stringify(data))
  }
}

const regexify = (str) => {
  const arr = str.split('/').map((path) => {
    if (/^:[a-z]+$/.test(path)) {
      return `(?<${path.slice(1)}>[a-zA-Z0-9_-]+)`
    }
    return path
  })
  return new RegExp(`^${arr.join('/')}$`)
}

const parseParams = (reg, path) => {
  const matched = path.match(reg)
  if (!matched) {
    return null
  }
  const params = { ...matched.groups }
  return Object.keys(params).length > 0 ? params : null
}

const resort = (routers) => {
  const fixedRouters = routers.filter(item => item.isFixed === true)
  const regexRouters = routers.filter(item => !item.isFixed)
  const fixedUpdate = sort(fixedRouters, (a, b) => {
    return a.regpath.length < b.regpath.length ? 1 : a.regpath.length > b.regpath.length ? -1 : 0
  })
  const regexUpdate = sort(regexRouters, (a, b) => {
    return a.regpath.toString().length < b.regpath.toString().length ?
      1 : a.regpath.toString().length > b.regpath.toString().length ? -1 : 0
  })
  return [
    ...fixedUpdate,
    ...regexUpdate,
  ]
}

export default (opts = {}) => {
  const emitter = new EventEmitter()

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, token, x-token, apikey, x-api-key',
  }

  const {
    cors = {},
    noDelay = true,
    keepAlive = false,
    maxHeaderSize = 16384,
    headersTimeout = 60000,
    requestTimeout = 300000,
  } = opts

  Object.keys(cors).forEach((k) => {
    const v = cors[k]
    corsHeaders[k] = v
  })

  const serverOptions = {
    noDelay,
    keepAlive,
    maxHeaderSize,
    headersTimeout,
    requestTimeout,
  }

  const addCorsHeaders = (req, res) => {
    Object.keys(corsHeaders).forEach((k) => {
      res.setHeader(k, corsHeaders[k])
    })
    if (req.method === 'OPTIONS') {
      res.status(204).send()
    }
  }

  const parseBody = (req, res) => {
    return new Promise((resolve) => {
      const { method } = req
      if (method === 'GET') {
        return resolve()
      }
      const ct = req.headers['content-type'] || ''
      if (!TYPES_FOR_BODY_PARSER.includes(ct)) {
        return resolve()
      }

      const bodyParts = []
      req.on('data', (chunk) => {
        bodyParts.push(chunk)
      }).on('end', () => {
        try {
          const body = Buffer.concat(bodyParts).toString()
          const data = (ct === 'application/json') ? JSON.parse(body) : querystring.parse(body)
          req.body = data
        } catch (err) {
          err.errorCode = 400
          emitter.emit('error', err, req, res)
          res.status(400).send(STATUS_CODES['400'])
        } finally {
          resolve()
        }
      })
    })
  }

  const modifications = [
    addRequestProperties,
    addResponseMethods,
    addCorsHeaders,
    parseBody,
  ]

  let routers = []

  const addRoute = (method, pattern, handlers = []) => {
    const isFixed = !pattern.includes(':')
    const regpath = isFixed ? pattern.toLowerCase() : regexify(pattern)
    const router = {
      method: method.toUpperCase(),
      isFixed,
      regpath,
      handlers,
    }
    routers = resort([
      ...routers,
      router,
    ])
  }

  const isCallable = (route, req) => {
    const { method, regpath, isFixed } = route
    if (method !== req.method) {
      return false
    }
    const pathname = req.path
    if (isFixed && pathname === regpath) {
      return true
    }

    const params = parseParams(regpath, pathname)
    if (params) {
      req.params = params
      return true
    }
    return false
  }

  const onHttpRequest = async (req, res) => {
    for (const fn of modifications) {
      if (res.writableEnded) {
        break
      }
      await fn(req, res)
    }

    const rindex = routers.findIndex(r => isCallable(r, req))
    if (rindex > -1) {
      const router = routers[rindex]
      const { handlers } = router
      for (const handle of handlers) {
        if (res.writableEnded) {
          break
        }
        try {
          await handle(req, res)
        } catch (err) {
          err.errorCode = 500
          emitter.emit('error', err, req, res)
          res.status(500).send(STATUS_CODES['500'])
          break
        }
      }
    }

    if (!res.writableEnded) {
      emitter.emit('notfound', req, res)
    }

    if (!res.writableEnded) {
      res.type('').status(404).end(STATUS_CODES['404'])
    }
  }

  const listen = (port = 7001, host = '0.0.0.0', callback = false) => {
    const fn = isFunction(callback) ? callback : isFunction(host) ? host : doNothing
    const hs = isFunction(host) ? '0.0.0.0' : host
    const server = http.createServer(serverOptions, onHttpRequest)
    return server.listen(Number(port), hs, fn)
  }

  return {
    listen,
    get: (...args) => {
      const pattern = args.shift()
      addRoute('GET', pattern, args)
    },
    put: (...args) => {
      const pattern = args.shift()
      addRoute('PUT', pattern, args)
    },
    post: (...args) => {
      const pattern = args.shift()
      addRoute('POST', pattern, args)
    },
    delete: (...args) => {
      const pattern = args.shift()
      addRoute('DELETE', pattern, args)
    },
    route: (...args) => {
      const method = args.shift()
      if (args.length > 1 && METHODS.includes(method)) {
        const pattern = args.shift()
        addRoute(method, pattern, args)
      }
    },
    use: (handle) => {
      modifications.push(handle)
    },
    onError: (handle) => {
      emitter.on('error', handle)
    },
    notFound: (handle) => {
      emitter.on('notfound', handle)
    },
  }
}
