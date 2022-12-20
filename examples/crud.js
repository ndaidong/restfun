// simple CRUD

import { STATUS_CODES } from 'node:http'
import crypto from 'node:crypto'

import restfun from '../index.js'

const server = restfun()

const data = {
  articles: [],
}

server.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

server.get('/articles', (req, res) => {
  console.log('List articles')
  res.json({
    status: 'ok',
    data: data.articles,
  })
})

server.post('/articles', (req, res) => {
  console.log('Add new article')
  const { title = '', content = '' } = req.body
  if (title && content) {
    const id = crypto.randomUUID()
    data.articles.push({
      id,
      title,
      content,
    })
    console.log(`Added article: ${id}`)
    return res.json({
      status: 'ok',
      id,
    })
  }
  console.log('Error while adding new article')
  return res.json({
    status: 'error',
  })
})

server.put('/articles/:id', (req, res) => {
  console.log('Update article')
  const { id = '' } = req.params
  const { articles } = data
  const pindex = articles.findIndex(item => item.id === id)
  if (pindex > -1) {
    const { title = '', content = '' } = req.body
    if (title && content) {
      articles[pindex].title = title
      articles[pindex].content = content
      data.articles = articles
      console.log(`Updated article: ${id}`)
      return res.json({
        status: 'ok',
        id,
      })
    }
  }
  console.log('Error while updating article')
  return res.json({
    status: 'error',
  })
})

server.delete('/articles/:id', (req, res) => {
  console.log('Remove article')
  const { id = '' } = req.params
  const { articles } = data
  const pindex = articles.findIndex(item => item.id === id)
  if (pindex > -1) {
    data.articles.splice(pindex, 1)
    console.log(`Removed article: ${id}`)
    return res.json({
      status: 'ok',
    })
  }
  console.log('Error while removing article')
  return res.json({
    status: 'error',
  })
})

server.get('/articles/:id', (req, res) => {
  console.log('Get article')
  const { id = '' } = req.params
  const { articles } = data
  const pindex = articles.findIndex(item => item.id === id)
  if (pindex > -1) {
    console.log(`Loaded article: ${id}`)
    return res.json({
      status: 'ok',
      data: articles[pindex],
    })
  }
  console.log(`Article not found: ${id}`)
  return res.json({
    status: 'error',
  })
})

server.notFound((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found',
  })
})

server.onError((err, req, res) => {
  res.status(err.errorCode).json({
    status: 'error',
    message: STATUS_CODES[err.errorCode],
  })
})

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 4001

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`)
})
