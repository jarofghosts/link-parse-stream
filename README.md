link-parse-stream
=================

a streaming parser for http link header format

## example

```js
var linkParser = require('link-parse-stream')
  , request = require('hyperquest')

request('http://some-resource-with-link.headers', function(err, res) {
  if(err) return console.log('lol')

  res.pipe(linkParser()).on('data', function(data) {
    console.log(data) // {href: 'http://whatever.herpderp', rel='iunno'}
  })
})
```

## license

MIT
