var parse = require('http-link').parse
  , test = require('tape')

var linkParser = require('../')

test('parses link format', function(t) {
  t.plan(1)

  var link = '<http://jessekeane.me>; rel=herp'
  var parser = linkParser()

  parser.on('data', function(data) {
    t.deepEqual(data, parse(link)[0])
  })

  parser.write(link.slice(0, 5))
  process.nextTick(function() {
    parser.write(link.slice(5))
    parser.end()
  })
})

test('parses multiple into link format', function(t) {
  t.plan(2)

  var link = '<http://jessekeane.me>; rel=herp,<http://herp.derp>; herp=derp'
  var parser = linkParser()
  var count = 0

  parser.on('data', function(data) {
    t.deepEqual(data, parse(link)[count++])
  })

  parser.write(link.slice(0, 5))
  process.nextTick(function() {
    parser.write(link.slice(5, 10))
    process.nextTick(function() {
      parser.write(link.slice(10))
      parser.end()
    })
  })
})
