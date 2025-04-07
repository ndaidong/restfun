// mistake.test.js
import { describe, it } from 'node:test'
import assert from 'node:assert'

import request from 'supertest'

import restfun from '../index.js'

const PORT = process.env.PORT || 4001

const server = restfun()

server.get('/fatal', () => {
  throw new Error('fatal error')
})

server.onError((err, req, res) => {
  res.status(err.errorCode).send('Server Internal Error')
})

const app = server.listen(PORT)

describe('Check notfound request', () => {
  it('GET /notfound', (done) => {
    request(app)
      .get('/notfound')
      .expect((res) => {
        assert.ok(res.text === 'Not Found')
      })
      .expect(404, done)
  })
})

describe('Check server error request', () => {
  it('GET /fatal should throw error 500', (done) => {
    request(app)
      .get('/fatal')
      .expect((res) => {
        assert.ok(res.text === 'Server Internal Error')
      })
      .expect(500, done)
  })
})
