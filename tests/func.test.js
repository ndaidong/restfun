// mistake.test.js
import { describe, it } from 'node:test'
import assert from 'node:assert'

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
  it('GET / with header should work', (done) => {
    request(app)
      .get('/')
      .set('Device-Id', 'R123456789')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(res.body.deviceId === 'R123456789')
        assert.ok(res.body.deviceIdGot === 'R123456789')
      })
      .expect(200, () => {
        done()
        server.close()
      })
  })
})
