// index.js

import http, { STATUS_CODES } from 'node:http'
import { EventEmitter } from 'node:events'

import { isArray, isFunction, hasProperty, genid } from 'bellajs'

if (!globalThis.URLPattern) {
  await import('urlpattern-polyfill')
}

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

const TYPES_FOR_PARSER = [
  'application/json',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'application/octet-stream',
]

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
  req.query = {}
  req.body = {}
}

const addResponseMethods = (req, res) => {
  res.status = (code = 200) => {
    res.statusCode = code
    return res
  }

  res.type = (ct = 'text') => {
    res.setHeader('Content-Type', MIME_TYPES[ct] || MIME_TYPES.text)
    return res
  }

  res.send = (val) => {
    if (res.writableEnded) {
      return false
    }
    const ct = res.getHeader('content-type')
    if (!ct) {
      res.type('text')
    }
    res.end(val)
  }

  res.html = (html) => {
    res.type('html')
    res.send(html)
  }

  res.json = (data) => {
    res.type('json')
    res.send(JSON.stringify(data))
  }
}

export default (opts = {}) => {
  const emitter = new EventEmitter()

  const SIM_BASE_URL = `http://rest-${genid(80)}.fun`

  const {
    enableCors = false,
    noDelay = true,
    keepAlive = false,
    maxHeaderSize = 16384,
    headersTimeout = 60000,
    requestTimeout = 300000,
  } = opts

  const serverOptions = {
    noDelay,
    keepAlive,
    maxHeaderSize,
    headersTimeout,
    requestTimeout,
  }

  const addCorsHeaders = (req, res) => {
    if (!enableCors) {
      return false
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'authorization, token, x-token, apikey, x-api-key')
    res.setHeader('Access-Control-Allow-Credentials', true)
    if (req.method === 'OPTIONS') {
      res.status(204).send()
    }
  }

  const parseQuery = (req) => {
    const url = new URLPattern(req.url, SIM_BASE_URL)
    const params = new URLSearchParams(url.search)
    const query = {}
    for (const [name, value] of params) {
      if (!hasProperty(query, name)) {
        query[name] = value
      } else {
        const currentVal = query[name]
        const xvals = isArray(currentVal) ? currentVal : [currentVal]
        query[name] = [...xvals, value]
      }
    }
    req.query = query
  }

  const parseBody = (req, res) => {
    return new Promise((resolve) => {
      const ct = req.headers['content-type'] || ''
      if (!TYPES_FOR_PARSER.includes(ct)) {
        return resolve()
      }

      const bodyParts = []
      req.on('data', (chunk) => {
        bodyParts.push(chunk)
      }).on('end', () => {
        try {
          const body = Buffer.concat(bodyParts).toString()
          const sdata = decodeURIComponent(body)
          const data = JSON.parse(sdata)
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
    parseQuery,
    parseBody,
  ]

  const middlewares = []

  const addRoute = (method = '*', pattern = '*', handle = doNothing) => {
    const urlpattern = new URLPattern({ pathname: pattern })
    middlewares.push({
      method: method.toUpperCase(),
      pattern: urlpattern,
      handle,
    })
  }

  const shouldCall = (method, pattern, req) => {
    if (method !== req.method) {
      return false
    }
    const reqUrlPattern = new URLPattern(req.url, SIM_BASE_URL)
    const re = pattern.exec(reqUrlPattern)
    if (re) {
      req.params = { ...re.pathname.groups }
      return true
    }
    return false
  }

  const onHttpRequest = async (req, res) => {
    for (const fn of modifications) {
      await fn(req, res)
    }

    for (const item of middlewares) {
      const { method, pattern, handle } = item
      if (res.writableEnded) {
        break
      }
      if (shouldCall(method, pattern, req)) {
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
    get: (pattern, handle) => {
      addRoute('GET', pattern, handle)
    },
    put: (pattern, handle) => {
      addRoute('PUT', pattern, handle)
    },
    post: (pattern, handle) => {
      addRoute('POST', pattern, handle)
    },
    delete: (pattern, handle) => {
      addRoute('DELETE', pattern, handle)
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
