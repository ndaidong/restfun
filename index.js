// index.js

import http, { STATUS_CODES } from 'node:http'
import querystring from 'node:querystring'
import { EventEmitter } from 'node:events'

import findMyWay from 'find-my-way'
import { isFunction } from 'bellajs'

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

export default (opts = {}) => {
  const emitter = new EventEmitter()

  const router = findMyWay({
    allowUnsafeRegex: false,
    caseSensitive: true,
    defaultRoute: (req, res) => {
      emitter.emit('notfound', req, res)

      if (!res.writableEnded) {
        res.type('').status(404).end(STATUS_CODES['404'])
      }
    },
  })

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

  const addRoute = (method, pattern, handlers = []) => {
    router.on(method, pattern, async (req, res, params, store, searchParams) => { // eslint-disable-line
      req.query = searchParams
      req.params = params
      for (const handle of handlers) {
        try {
          if (res.writableEnded) {
            break
          }
          await handle(req, res)
        } catch (err) {
          err.errorCode = 500
          emitter.emit('error', err, req, res)
          res.status(500).send(STATUS_CODES['500'])
        }
      }
    })
  }

  const onHttpRequest = async (req, res) => {
    for (const fn of modifications) {
      await fn(req, res)
    }
    router.lookup(req, res)
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
