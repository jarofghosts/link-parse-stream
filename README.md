# link-parse-stream

[![Build Status](http://img.shields.io/travis/jarofghosts/link-parse-stream.svg?style=flat)](https://travis-ci.org/jarofghosts/link-parse-stream)
[![npm install](http://img.shields.io/npm/dm/link-parse-stream.svg?style=flat)](https://www.npmjs.org/package/link-parse-stream)

a streaming parser for http link header format

## example

```js
var linkParser = require('link-parse-stream')
  , request = require('hyperquest')

request('http://some-resource-with-link.headers', function(err, res) {
  if(err) {
    return console.log('lol')
  }

  res.pipe(linkParser()).on('data', function(data) {
    console.log(data) // {href: 'http://whatever.herpderp', rel='iunno'}
  })
})
```

## license

MIT
