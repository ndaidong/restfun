// options.test.js
import { describe, it } from 'node:test'
import assert from 'node:assert'

import http from 'node:http'

import request from 'supertest'

import restfun from '../index.js'

const PORT = process.env.PORT || 4001

describe('Check option `cors`', () => {
  it('GET / with default cors enabled', (done) => {
    const server = restfun()
    server.get('/', (req, res) => {
      res.html('Hello restfun')
    })
    const app = server.listen(PORT)
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        assert.ok(res.text === 'Hello restfun')
        assert.ok(res.headers['access-control-allow-origin'] === '*')
      })
      .expect(200, done)
  })

  it('GET / with modified cors option', (done) => {
    const server = restfun({
      cors: {
        'Access-Control-Allow-Origin': 'https://rest.fun',
      },
    })
    server.get('/', (req, res) => {
      res.html('Hello restfun')
    })
    const app = server.listen(PORT)
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        assert.ok(res.text === 'Hello restfun')
        assert.ok(res.headers['access-control-allow-origin'] === 'https://rest.fun')
      })
      .expect(200, done)

    request(app)
      .options('/')
      .expect(204, done)
  })
})

describe('Check use() method', () => {
  it('GET / ', (done) => {
    const server = restfun()
    server.use((req, res) => {
      res.setHeader('avanced-test-case', 'use-method')
    })
    server.get('/', (req, res) => {
      res.html('Hello restfun')
    })
    const app = server.listen(PORT)
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        assert.ok(res.text === 'Hello restfun')
        assert.ok(res.headers['avanced-test-case'] === 'use-method')
      })
      .expect(200, done)
  })
})

describe('Check dedicated server', () => {
  it('GET / ', (done) => {
    const server = restfun({
      server: http.createServer(),
    })
    server.use((req, res) => {
      res.setHeader('avanced-test-case', 'use-method')
    })
    server.get('/', (req, res) => {
      res.html('Hello restfun')
    })
    const app = server.listen(PORT)
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        assert.ok(res.text === 'Hello restfun')
        assert.ok(res.headers['avanced-test-case'] === 'use-method')
      })
      .expect(200, done)
  })
})
