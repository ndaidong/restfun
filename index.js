// index.js

import http from 'node:http'

const doNothing = () => {}

export default (opts = {}) => {
  const onHttpRequest = async (req, res) => {
    res.end('ok')
  }

  const listen = (port = 7001, host = '0.0.0.0', callback = false) => {
    const fn = isFunction(callback) ? callback : doNothing
    const server = http.createServer(opts, onHttpRequest)
    return server.listen(Number(port), host, fn)
  }

  return {
    listen,
  }
}
