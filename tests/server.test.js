// server.test.js

/* eslint-env jest */

import request from 'supertest'

import { isObject, isArray, hasProperty } from 'bellajs'

import { server, app } from './server.js'

describe('check restfun instance', () => {
  const methods = [
    'listen',
    'get',
    'post',
    'put',
    'delete',
    'use',
    'onError',
    'notFound',
  ]

  test('restfun must be an object', () => {
    expect(isObject(server)).toBeTruthy()
  })

  methods.forEach((fun) => {
    test(`restfun must have method: ${fun}`, () => {
      expect(hasProperty(server, fun)).toBeTruthy()
    })
  })
})

describe('Check regular REST requests', () => {
  test('GET /', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect((res) => {
        expect(res.text).toEqual('Hello restfun')
      })
      .expect(200, done)
  })

  test('GET /favicon.ico', (done) => {
    request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200, done)
  })

  test('GET /categories', (done) => {
    request(app)
      .get('/categories')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.categories.length).toEqual(2)
      })
      .expect(200, done)
  })

  test('GET /categories/tech', (done) => {
    request(app)
      .get('/categories/tech')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.slug).toEqual('tech')
        expect(res.body.name).toEqual('Technology')
      })
      .expect(200, done)
  })

  test('POST /categories', (done) => {
    request(app)
      .post('/categories')
      .send({
        slug: 'sport',
        name: 'Sports',
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.action).toEqual('addCategory')
      })
      .expect(200, done)
  })

  test('POST /categories with form submit', (done) => {
    request(app)
      .post('/categories')
      .type('form')
      .send({
        slug: 'politics',
        name: 'Politics',
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.action).toEqual('addCategory')
      })
      .expect(200, done)
  })

  test('GET /categories - Reload', (done) => {
    request(app)
      .get('/categories')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.categories.length).toEqual(4)
      })
      .expect(200, done)
  })

  test('PUT /categories/tech', (done) => {
    request(app)
      .put('/categories/tech')
      .set('Content-Type', 'application/json')
      .send({
        name: 'Tech',
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.action).toEqual('updateCategory')
        expect(res.body.slug).toEqual('tech')
      })
      .expect(200, done)
  })

  test('GET /categories/tech - Reload', (done) => {
    request(app)
      .get('/categories/tech')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.slug).toEqual('tech')
        expect(res.body.name).toEqual('Tech')
      })
      .expect(200, done)
  })

  test('DELETE /categories/sport', (done) => {
    request(app)
      .delete('/categories/sport')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.action).toEqual('removeCategory')
        expect(res.body.slug).toEqual('sport')
      })
      .expect(200, done)
  })

  test('GET /categories - Reload again', (done) => {
    request(app)
      .get('/categories')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.categories.length).toEqual(3)
      })
      .expect(200, done)
  })

  test('GET /search?q=restfun&type=module', (done) => {
    request(app)
      .get('/search?q=restfun&type=module')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.q).toEqual('restfun')
        expect(res.body.type).toEqual('module')
      })
      .expect(200, done)
  })

  test('GET /search?q=restfun&type=module&type=commonjs', (done) => {
    request(app)
      .get('/search?q=restfun&type=module&type=commonjs')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.q).toEqual('restfun')
        expect(isArray(res.body.type)).toBeTruthy()
        expect(res.body.type).toEqual(['module', 'commonjs'])
      })
      .expect(200, done)
  })

  test('GET /search?q=restfun&type=module&type=commonjs&type=esm', (done) => {
    request(app)
      .get('/search?q=restfun&type=module&type=commonjs&type=esm')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        expect(res.body.q).toEqual('restfun')
        expect(isArray(res.body.type)).toBeTruthy()
        expect(res.body.type).toEqual(['module', 'commonjs', 'esm'])
      })
      .expect(200, done)
  })

  test('GET /categories/:slug/search?q=restfun&type=module', (done) => {
    request(app)
      .get('/categories/tech/search?q=restfun&type=module')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(isObject(res.body)).toBeTruthy()
        const { params, query } = res.body
        expect(params.slug).toEqual('tech')
        expect(query.q).toEqual('restfun')
        expect(query.type).toEqual('module')
      })
      .expect(200, done)
  })
})

describe('Check error requests', () => {
  test('POST /categories', (done) => {
    request(app)
      .post('/categories')
      .set('Content-Type', 'application/json')
      .send('')
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual('Bad Request')
      })
      .expect(400, done)
  })

  test('POST /healthy', (done) => {
    request(app)
      .post('/healthy')
      .send({})
      .expect('Content-Type', /text/)
      .expect((res) => {
        expect(res.text).toEqual('Not Found')
      })
      .expect(404, done)
  })
})
