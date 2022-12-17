// server.js
import { readFileSync } from 'node:fs'
import { STATUS_CODES } from 'node:http'

import restfun from '../index.js'

export const server = restfun()

const env = process.env || {}
const HOST = env.HOST || '0.0.0.0'
const PORT = env.PORT || 4001

const categories = [
  {
    slug: 'tech',
    name: 'Technology',
  },
  {
    slug: 'finance',
    name: 'Finance',
  },
]

const findItemBySlug = (slug) => {
  const cindex = categories.findIndex(cate => cate.slug === slug)
  return cindex === -1 ? null : categories[cindex]
}

const removeItemBySlug = (slug) => {
  const cindex = categories.findIndex(cate => cate.slug === slug)
  return cindex === -1 ? false : categories.splice(cindex, 1)
}

const favicon = readFileSync('./tests/favicon.png')

server.get('/favicon.ico', (req, res) => {
  res.type('ico').send(favicon)
})

server.get('/categories', (req, res) => {
  res.json({ categories })
})

server.get('/categories/:slug', (req, res) => {
  const { slug } = req.params
  const cate = findItemBySlug(slug)
  res.json(cate)
})

server.post('/categories', (req, res) => {
  categories.push(req.body)
  res.json({
    action: 'addCategory',
    data: req.body,
  })
})

server.put('/categories/:slug', (req, res) => {
  const { slug } = req.params
  const { name } = req.body
  const cate = findItemBySlug(slug)
  cate.name = name
  res.json({
    action: 'updateCategory',
    slug,
    data: req.body,
  })
})

server.delete('/categories/:slug', (req, res) => {
  const { slug } = req.params
  removeItemBySlug(slug)
  res.json({
    action: 'removeCategory',
    slug,
  })
})

server.get('/search', (req, res) => {
  res.json(req.query)
})

server.get('/categories/:slug/search', (req, res) => {
  res.json({
    params: req.params,
    query: req.query,
  })
})

server.get('/', (req, res) => {
  res.html('Hello restfun')
})

server.notFound((req, res) => {
  res.status(404).send('Not Found')
})

server.onError((err, req, res) => {
  res.status(err.errorCode).send(STATUS_CODES[err.errorCode])
})

export const app = server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`)
})
