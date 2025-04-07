# restfun

To run minimal and fast rest api on the edges.

[![npm](https://img.shields.io/npm/v/restfun?color=green)](https://www.npmjs.com/package/restfun)
[![CodeQL](https://github.com/ndaidong/restfun/workflows/CodeQL/badge.svg)](https://github.com/ndaidong/restfun/actions/workflows/codeql-analysis.yml)
[![CI test](https://github.com/ndaidong/restfun/workflows/ci-test/badge.svg)](https://github.com/ndaidong/restfun/actions/workflows/ci-test.yml)

## Install

```bash
pnpm i restfun
bun add restfun
```

## Usage

### Node.js

Hello word with `restfun`:

```js
import restfun from 'restfun'

const server = restfun()

server.get('/', (req, res) => {
  res.html('Hello world')
})

server.listen(3001)
```

## APIs

### `restfun`

#### Syntax

```ts
restfun()
restfun(Object options)
```

#### Parameters

##### `options` *optional*

- `cors`: object, headers for cors, default to `{}`
- `noDelay`: bolean, default to `true`
- `keepAlive`: bolean, default to `false`
- `maxHeaderSize`: number, default to `16384`
- `headersTimeout`: number, default to `60000`
- `requestTimeout`: number, default to `300000`

Regarding `cors`, by default, `restfun` enalbe CORS by auto adding the following headers:

```bash
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: authorization, token, x-token, apikey, x-api-key
```

Developer can modify, or add more via `cors` options, for example:

```js
import restfun from 'restfun'

export const server = restfun({
  cors: {
    'Access-Control-Allow-Origin': 'https://myownfrontend.com', // overwrite
    'Access-Control-Allow-Credentials': 'true'
  }
})
```

For other options, refer [this link](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener).

#### Return

Return a `restfun` instance with the following methods:

- `listen(port, host, callback)`: start listening at the specified port
- `get(pattern, handler)`: routes GET request to the specified pattern
- `post(pattern, handler)`: routes POST request to the specified pattern
- `put(pattern, handler)`: routes PUT request to the specified pattern
- `patch(pattern, handler)`: routes PATCH request to the specified pattern
- `delete(pattern, handler)`: routes DELETE request to the specified pattern
- `head(pattern, handler)`: routes HEAD request to the specified pattern
- `options(pattern, handler)`: routes OPTIONS request to the specified pattern
- `route(METHOD, pattern, handler`: another way to add router using any HTTP methods
- `use(handler)`: insert a handler in the middle of request/response processing, before the router handlers
- `notFound(handler)`: add handler to deal with 404 error
- `onError(handler)`: add handler to deal with other errors

##### `patterns`

This lib only support simple pattern, e.g,:

- `/:category/:slug`
- `/profile/:userid/`
- `/accounts/:userid/settings`
- `/search`
- `/`


##### `handler`

A function that accepts an [IncomingMessage](https://nodejs.org/api/http.html#class-httpincomingmessage) (a.k.a `req`) and a [ServerResponse](https://nodejs.org/api/http.html#class-httpserverresponse) (a.k.a `res`).

Along with what are inherited from their prototype, `restfun` adds the following properties and methods to `req`/`res`:

- `req.ip`
- `req.params`
- `req.query`
- `req.body`
- `req.getHeader()`
- `res.type()`
- `res.status()`
- `res.json()`
- `res.html()`
- `res.send()`

## Benchmark

```sh
oha -n 5000 -c 8 -z 30s --disable-keepalive http://0.0.0.0:3001
```

![Screenshot From 2025-04-07 15-32-32](https://github.com/user-attachments/assets/b91b4b67-1ed6-4ce6-a56b-1c15a98f30a0)

- 12th Gen Intel(R) Core(TM) i5-12450HX (12) @ 4.40 GHz
- RAM DDR5 4800 MT/s 24GB
- Node.js v22.14.0 on Fedora 41


## Test

```bash
git clone https://github.com/ndaidong/restfun.git
cd restfun
pnpm i
pnpm test
```

## License
The MIT License (MIT)

---
