# restfun

To run minimal rest api with almost native modules.

[![npm version](https://badge.fury.io/js/ndaidong/restfun.svg)](https://badge.fury.io/js/ndaidong/restfun)
![CodeQL](https://github.com/ndaidong/restfun/workflows/CodeQL/badge.svg)
![CI test](https://github.com/ndaidong/restfun/workflows/ci-test/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/restfun/badge.svg)](https://coveralls.io/github/ndaidong/restfun)

## Install

### Node.js

```bash
pnpm i restfun
```

### Bun

- not yet

### Deno

- not yet


## Usage

Node.js 16+

```js
// server.js

import restfun from 'restfun'

export const server = restfun()

server.get('/', (req, res) => {
  res.html('Hello restfun')
})

server.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

server.notFound((req, res) => {
  res.status(404).send('Not Found')
})

server.onError((err, req, res) => {
  res.status(err.errorCode).send('Something went wrong')
})

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 4001

export const app = server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`)
})

```

## Test

```bash
git clone https://github.com/ndaidong/restfun.git
cd ndaidong/restfun
pnpm i
pnpm test
```


## License
The MIT License (MIT)

---
