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

Create a server.js file as below:

```js
import restfun from 'restfun'

const server = restfun()

server.get('/', (req, res) => {
  res.html('Hello world')
})

server.listen(3001)
```

Run with Node.js or Bun:

```bash
node server.js
# or
bun run server
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

An example:

```js
import restfun from 'restfun'

export const server = restfun()

const PORT = 3001
const HOST = '0.0.0.0'

server.get('/', async (req, res) => {
  const ua = req.getHeader('user-agent')
  console.log(`${req.ip} ${req.method} ${req.path}: ${ua}`)
  res.html('Hello restfun')
})

server.listen(PORT, HOST, () => {
  console.log(`Server started listening at http://${HOST}:${PORT}`)
})
````

## Benchmark

Here are the result by [oha](https://github.com/hatoo/oha) after the following command:

```bash
oha -n 5000 -c 8 -z 30s --disable-keepalive http://0.0.0.0:3001
```

- restfun with Node.js v22.14.0:

```bash
Summary:
  Success rate: 100.00%
  Total:  30.0002 secs
  Slowest:  0.0130 secs
  Fastest:  0.0001 secs
  Average:  0.0004 secs
  Requests/sec: 20592.5155

  Total data: 7.66 MiB
  Size/request: 13 B
  Size/sec: 261.42 KiB
```

- restfun with Bun v1.2.10:

```bash
Summary:
  Success rate: 100.00%
  Total:  30.0004 secs
  Slowest:  0.0189 secs
  Fastest:  0.0000 secs
  Average:  0.0002 secs
  Requests/sec: 37074.3614

  Total data: 13.79 MiB
  Size/request: 13 B
  Size/sec: 470.67 KiB
```

System specs:

- 12th Gen Intel(R) Core(TM) i5-12450HX (12) @ 4.40 GHz
- RAM DDR5 4800 MT/s 24GB

Under the same conditions, we also tested some other alternatives:

| Library/Framework | Node.js v22.14.0 | Bun v1.2.10 | Deno v2.2.12 |
|--|--|--|--|
| restfun@0.0.18 | 20,592 | 37,074 | 6,645 |
| fastify@5.3.2 | 22,815 | 42,978 | 7,199 |
| koa@2.16.1 | 19,359 | 39,288 | 7,263 |
| polka@1.0.0-next.28 | 21,840 | 16,189 | 3,392 |
| nitro@2.11.9 | 15,450 | 14,596 | 6,580 |
| express@5.1.0 | 11,237 | 37,832 | 6,170 |
| hono@4.7.7 | 20,045 | 50,292 | 41,513 |
| elysia@1.2.25 | 22,738 | 50,209 | 7,165 |
| ultimate-express@1.4.6 | 48,377 | not support | not support |
| hyper-express@6.17.3 | 49,427 | not support | not support |
| Node HTTP module | 27,935 | 43,668 | 7,184  |
| Bun.serve | not support | 53,702 | not support |
| Deno.serve | not support | not support | 42,447 |

* elysia run on Deno with `@elysiajs/node`
* Node, Bun, Deno all have built-in server, but only Bun supports routers

Looking into the above table, we can see that `restfun` is just for fun. Until now, I mainly use `hyper-express` in my projects. But I'm slowly switching to Bun as its built-in server is very cool. For the teams, I recommend to use a mix between `express` and `ultimate-express` then it has both standard and performance, dev friendly and production ready. If your project must work on Bun and Deno, `hono` is still the best choice.

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
