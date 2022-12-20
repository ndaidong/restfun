# restfun

To run minimal and fast rest api on the edges.

[![npm](https://img.shields.io/npm/v/restfun)](https://www.npmjs.com/package/restfun)
[![CodeQL](https://github.com/ndaidong/restfun/workflows/CodeQL/badge.svg)](https://github.com/ndaidong/restfun/actions/workflows/codeql-analysis.yml)
[![CI test](https://github.com/ndaidong/restfun/workflows/ci-test/badge.svg)](https://github.com/ndaidong/restfun/actions/workflows/ci-test.yml)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/restfun/badge.svg)](https://coveralls.io/github/ndaidong/restfun)
[![CodeFactor](https://www.codefactor.io/repository/github/ndaidong/restfun/badge)](https://www.codefactor.io/repository/github/ndaidong/restfun)


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

Hello word with `restfun`:

```js
import restfun from 'restfun'

const server = restfun()

server.get('/', (req, res) => {
  res.html('Hello world')
})

server.listen(3001)
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
- `delete(pattern, handler)`: routes DELETE request to the specified pattern
- `use(handler)`: insert a handler in the middle of request/response processing, before the router handlers
- `notFound(handler)`: add handler to deal with 404 error
- `onError(handler)`: add handler to deal with other errors

##### `patterns`

Pattern of router. Refer [find-my-way](https://github.com/delvedor/find-my-way)


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

## Benchmark

```sh
autocannon -c 100 -w 4 -d 20 http://0.0.0.0:3001
```

![Benchmark](https://i.imgur.com/vmZSAwT.png)

- Intel® Core™ i7-10510U CPU @ 1.80GHz × 8
- RAM DDR4 2667 MT/s 16GB
- Node.js v18.12.1 on Debian 11.6


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
