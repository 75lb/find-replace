const Tom = require('test-runner').Tom
const TestRunner = require('test-runner')
const findReplace = require('./')
const a = require('assert')

const tom = module.exports = new Tom()

tom.test('find primitive, replace with primitive', function (t) {
  const result = findReplace([ 1, 2, 3, 4, 2 ], n => n === 2, 'two')
  a.deepStrictEqual(result, [ 1, 'two', 3, 4, 'two' ])
})

tom.test('find primitive, replace with array', function (t) {
  const result = findReplace(
    [ 1, 2, 3, 4, 2 ],
    n => n === 2,
    [ 'two', 'zwei' ]
  )
  a.deepStrictEqual(result, [ 1, [ 'two', 'zwei' ], 3, 4, [ 'two', 'zwei' ] ])
})

tom.test('find primitive, replace with several primitives', function (t) {
  const result = findReplace([ 1, 2, 3, 4, 2 ], n => n === 2, 'two', 'zwei')
  a.deepStrictEqual(result, [ 1, 'two', 'zwei', 3, 4, 'two', 'zwei' ])
})

tom.test('getopt example', function (t) {
  const result = findReplace(
    [ '--one', '1', '-abc', 'three' ],
    item => /^-(\w{2,})$/.test(item),
    function (match) {
      return [ '-a', '-b', '-c' ]
    }
  )
  a.deepStrictEqual(result, [ '--one', '1', '-a', '-b', '-c', 'three' ])
})

tom.test('getopt example 2', function (t) {
  const result = findReplace(
    [ '--one', '1', '-abc', 'three' ],
    item => /^-(\w{2,})$/.test(item),
    'bread',
    'milk'
  )
  a.deepStrictEqual(result, [ '--one', '1', 'bread', 'milk', 'three' ])
})
