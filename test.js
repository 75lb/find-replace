import findReplace from 'find-replace'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('find primitive, replace with primitive', function () {
  const result = findReplace(
    [1, 2, 3, 4, 2],
    n => n === 2,
    'two'
  )
  a.deepEqual(result, [1, 'two', 3, 4, 'two'])
})

test.set('find primitive, replace with array', function () {
  const result = findReplace(
    [1, 2, 3, 4, 2],
    n => n === 2,
    ['two', 'zwei']
  )
  a.deepEqual(result, [1, ['two', 'zwei'], 3, 4, ['two', 'zwei']])
})

test.set('find primitive, replace with several primitives', function () {
  const result = findReplace(
    [1, 2, 3, 4, 2],
    n => n === 2,
    'two',
    'zwei'
  )
  a.deepEqual(result, [1, 'two', 'zwei', 3, 4, 'two', 'zwei'])
})

test.set('getopt example', function () {
  const result = findReplace(
    ['--one', '1', '-abc', 'three'],
    item => /^-(\w{2,})$/.test(item),
    function (match) {
      return ['-a', '-b', '-c']
    }
  )
  a.deepEqual(result, ['--one', '1', '-a', '-b', '-c', 'three'])
})

test.set('getopt example 2', function () {
  const result = findReplace(
    ['--one', '1', '-abc', 'three'],
    item => /^-(\w{2,})$/.test(item),
    'bread',
    'milk'
  )
  a.deepEqual(result, ['--one', '1', 'bread', 'milk', 'three'])
})

test.set('validation', function () {
  a.throws(
    () => findReplace('not an array'),
    /must be an array/
  )
})

export { test, only, skip }
