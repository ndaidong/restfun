// server.test.js
import { describe, it } from 'node:test'
import assert from 'node:assert'

import request from 'supertest'

import { isObject, isArray, hasProperty } from '@ndaidong/bellajs'

import { server, app } from './server.js'

describe('check restfun instance', () => {
  const methods = [
    'listen',
    'get',
    'post',
    'put',
    'delete',
    'head',
    'options',
    'use',
    'onError',
    'notFound',
  ]

  it('restfun must be an object', () => {
    assert.ok(isObject(server))
  })

  methods.forEach((fun) => {
    it(`restfun must have method: ${fun}`, () => {
      assert.ok(hasProperty(server, fun))
    })
  })
})

describe('Check regular REST requests', () => {
  it('GET /', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        assert.ok(res.text === 'Hello restfun')
      })
      .expect(200, done)
  })

  it('GET /favicon.ico', (done) => {
    request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200, done)
  })

  it('GET /categories', (done) => {
    request(app)
      .get('/categories')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.categories.length === 2)
      })
      .expect(200, done)
  })

  it('GET /categories/tech', (done) => {
    request(app)
      .get('/categories/tech')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.slug === 'tech')
        assert.ok(res.body.name === 'Technology')
      })
      .expect(200, done)
  })

  it('POST /categories', (done) => {
    request(app)
      .post('/categories')
      .send({
        slug: 'sport',
        name: 'Sports',
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.action === 'addCategory')
      })
      .expect(200, done)
  })

  it('POST /categories with form submit', (done) => {
    request(app)
      .post('/categories')
      .type('form')
      .send({
        slug: 'politics',
        name: 'Politics',
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.action === 'addCategory')
      })
      .expect(200, done)
  })

  it('GET /categories - Reload', (done) => {
    request(app)
      .get('/categories')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.categories.length === 4)
      })
      .expect(200, done)
  })

  it('PUT /categories/tech', (done) => {
    request(app)
      .put('/categories/tech')
      .set('Content-Type', 'application/json')
      .send({
        name: 'Tech',
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.action === 'updateCategory')
        assert.ok(res.body.slug === 'tech')
      })
      .expect(200, done)
  })

  it('GET /categories/tech - Reload', (done) => {
    request(app)
      .get('/categories/tech')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.slug === 'tech')
        assert.ok(res.body.name === 'Tech')
      })
      .expect(200, done)
  })

  it('DELETE /categories/sport', (done) => {
    request(app)
      .delete('/categories/sport')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.action === 'removeCategory')
        assert.ok(res.body.slug === 'sport')
      })
      .expect(200, done)
  })

  it('GET /categories - Reload again', (done) => {
    request(app)
      .get('/categories')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.categories.length === 3)
      })
      .expect(200, done)
  })

  it('GET /search?q=restfun&type=module', (done) => {
    request(app)
      .get('/search?q=restfun&type=module')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.q === 'restfun')
        assert.ok(res.body.type === 'module')
      })
      .expect(200, done)
  })

  it('GET /search?q=restfun&type=module&type=commonjs', (done) => {
    request(app)
      .get('/search?q=restfun&type=module&type=commonjs')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.q === 'restfun')
        assert.ok(isArray(res.body.type))
        assert.ok(res.body.type.includes('module'))
        assert.ok(res.body.type.includes('commonjs'))
      })
      .expect(200, done)
  })

  it('GET /search?q=restfun&type=module&type=commonjs&type=esm', (done) => {
    request(app)
      .get('/search?q=restfun&type=module&type=commonjs&type=esm')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.q === 'restfun')
        assert.ok(isArray(res.body.type))
        assert.ok(res.body.type.includes('module'))
        assert.ok(res.body.type.includes('commonjs'))
        assert.ok(res.body.type.includes('esm'))
      })
      .expect(200, done)
  })

  it('GET /categories/:slug/search?q=restfun&type=module', (done) => {
    request(app)
      .get('/categories/tech/search?q=restfun&type=module')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        const { params, query } = res.body
        assert.ok(params.slug === 'tech')
        assert.ok(query.q === 'restfun')
        assert.ok(query.type === 'module')
      })
      .expect(200, done)
  })
})

describe('Check auth with multi handlers', () => {
  it('GET /account/balance - without token', (done) => {
    request(app)
      .get('/account/balance')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.status === 'error')
        assert.ok(res.body.message === 'Unauthorized')
      })
      .expect(401, done)
  })

  it('GET /account/balance - with token', (done) => {
    request(app)
      .get('/account/balance')
      .set('Authorization', 'Bearer Ot1R4UfJ5P510t1tpyU2G8iM341V0bWLw485DauF')
      .expect('Content-Type', /json/)
      .expect((res) => {
        assert.ok(isObject(res.body))
        assert.ok(res.body.status === 'ok')
        assert.ok(res.body.balance.total === 7500000)
      })
      .expect(200, done)
  })
})

describe('Check route() method', () => {
  it('GET /health', (done) => {
    request(app)
      .get('/health')
      .expect((res) => {
        assert.ok(res.text === 'ok')
      })
      .expect(200, done)
  })
})

describe('Check error requests', () => {
  it('POST /categories', (done) => {
    request(app)
      .post('/categories')
      .set('Content-Type', 'application/json')
      .send('')
      .expect('Content-Type', /text/)
      .expect((res) => {
        assert.ok(res.text === 'Bad Request')
      })
      .expect(400, done)
  })

  it('POST /healthy', (done) => {
    request(app)
      .post('/healthy')
      .send({})
      .expect('Content-Type', /text/)
      .expect((res) => {
        assert.ok(res.text === 'Not Found')
      })
      .expect(404, done)
  })
})
