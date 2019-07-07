# NeDB with Promises

This is an extremly thin wrapper around the [NeDB](https://www.npmjs.com/package/nedb) library, using [Proxies](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy) with [tapsig](https://www.npmjs.com/package/tapsig).

## Usage
The API is almost exactly the same as in NeDB 1.8 with two key differences:

- Obviously, the callback parameters are omitted.
- Because callbacks are omitted, `.find()` and `.count()` need to always be followed up with `.exec()` to yield a result.

## Installation
```bash
npm install --save @loilo/nedb
```