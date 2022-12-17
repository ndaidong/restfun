# restfun

To run minimal rest api with almost native modules.

[![npm version](https://badge.fury.io/js/restfun.svg)](https://badge.fury.io/js/restfun)
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

### Node.js

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

server.post('/posts', (req, res) => {
  res.json({
    data: req.body,
  })
})

server.put('/posts/:postId', (req, res) => {
  res.json({
    postId: req.params.postId,
    data: req.body,
  })
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

### Bun

- not yet

### Deno

- not yet

## APIs

### `restfun`

#### Syntax

```ts
restfun()
restfun(Object options)
```

#### Parameters

##### `options` *optional*

- `enableCors`: bolean, default to `false`
- `noDelay`: bolean, default to `true`
- `keepAlive`: bolean, default to `false`
- `maxHeaderSize`: number, default to `16384`
- `headersTimeout`: number, default to `60000`
- `requestTimeout`: number, default to `300000`

For more info, refer [this link](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener).

#### Return

Return a `restfun` instance with the following methods:

- `listen(port, host, callback)`: start listening at the specified port
- `get(pattern, handler)`: routes GET request to the specified pattern
- `post(pattern, handler)`: routes POST request to the specified pattern
- `put(pattern, handler)`: routes PUT request to the specified pattern
- `delete(pattern, handler)`: routes DELETE request to the specified pattern
- `use(handler)`: insert a handler in the middle of request/response processing, before the router handlers
- `notFound(handler)`: add handler to deal with 404 error
- `onError(handler)`: add handler to deal with other errors

##### `patterns`

A string that follows URLPattern syntax, to specify path of router.

Refer [URLPattern API](https://wicg.github.io/urlpattern/) and [URLPattern polyfill](https://www.npmjs.com/package/urlpattern-polyfill).


##### `handler`

A function that accepts an [IncomingMessage](https://nodejs.org/api/http.html#class-httpincomingmessage) (a.k.a `req`) and a [ServerResponse](https://nodejs.org/api/http.html#class-httpserverresponse) (a.k.a `res`).

Along with what are inherited from their prototype, `restfun` adds the following properties and methods to `req`/`res`:

- `req.ip`
- `req.params`
- `req.query`
- `req.body`
- `res.type()`
- `res.status()`
- `res.json()`
- `res.html()`
- `res.send()`


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
