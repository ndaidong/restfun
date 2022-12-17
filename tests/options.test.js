// options.test.js

/* eslint-env jest */

import request from 'supertest'

import restfun from '../index.js'

const PORT = process.env.PORT || 4001

describe('Check option `enableCors`', () => {
  test('GET / without cors', (done) => {
    const server = restfun()
    server.get('/', (req, res) => {
      res.html('Hello restfun')
    })
    const app = server.listen(PORT)
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        expect(res.text).toEqual('Hello restfun')
        expect(res.headers['access-control-allow-origin']).toEqual(undefined)
      })
      .expect(200, done)
  })

  test('GET / with cors', (done) => {
    const server = restfun({ enableCors: true })
    server.get('/', (req, res) => {
      res.html('Hello restfun')
    })
    const app = server.listen(PORT)
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        expect(res.text).toEqual('Hello restfun')
        expect(res.headers['access-control-allow-origin']).toEqual('*')
      })
      .expect(200, done)

    request(app)
      .options('/')
      .expect(204, done)
  })
})

describe('Check use() method', () => {
  test('GET / ', (done) => {
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
        expect(res.text).toEqual('Hello restfun')
        expect(res.headers['avanced-test-case']).toEqual('use-method')
      })
      .expect(200, done)
  })
})
