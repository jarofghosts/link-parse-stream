var parse = require('http-link').parse
  , duplexer = require('duplexer')
  , through = require('through')
  , split = require('split')

module.exports = linkParser

function linkParser() {
  var stream = through()
    , input = split(',')

  input.on('data', function(data) {
    var parsed = parse(data)

    if(parsed && parsed.length) stream.queue(parsed[0])
  })

  return duplexer(input, stream)
}
