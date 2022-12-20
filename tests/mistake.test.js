// mistake.test.js

/* eslint-env jest */

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
  test('GET /notfound', (done) => {
    request(app)
      .get('/notfound')
      .expect((res) => {
        expect(res.text).toEqual('Not Found')
      })
      .expect(404, done)
  })
})

describe('Check server error request', () => {
  test('GET /fatal should throw error 500', (done) => {
    request(app)
      .get('/fatal')
      .expect((res) => {
        expect(res.text).toEqual('Server Internal Error')
      })
      .expect(500, done)
  })
})
