var parse = require('http-link').parse
  , duplexer = require('duplexify')
  , through = require('through2')
  , split = require('split')

module.exports = linkParser

function linkParser() {
  var stream = through.obj(write)
    , input = split(',')

  input.pipe(stream)

  return duplexer.obj(input, stream)

  function write(data, enc, next) {
    var parsed = parse(data)

    if(parsed && parsed.length) {
      stream.push(parsed[0])
    }

    next()
  }
}
