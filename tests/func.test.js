// mistake.test.js

/* eslint-env jest */

import request from 'supertest'

import restfun from '../index.js'

const PORT = process.env.PORT || 4001

const server = restfun()

server.get('/', (req, res) => {
  const deviceId = req.headers['device-id']
  const deviceIdGot = req.getHeader('device-id')
  res.json({
    deviceId,
    deviceIdGot,
  })
})

const app = server.listen(PORT)

describe('Check header accessing', () => {
  test('GET / with header should work', (done) => {
    request(app)
      .get('/')
      .set('Device-Id', 'R123456789')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.deviceId).toEqual('R123456789')
        expect(res.body.deviceIdGot).toEqual('R123456789')
      })
      .expect(200, done)
  })
})
