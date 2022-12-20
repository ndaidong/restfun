// hello world
import restfun from '../index.js'

const server = restfun()

server.get('/', (req, res) => {
  res.html('Hello world')
})

server.listen(3001)
