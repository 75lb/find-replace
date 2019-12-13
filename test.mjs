import Tom from 'test-object-model/index.mjs'
import findReplace from './index.mjs'
import getAssert from 'isomorphic-assert/index.mjs'

async function getTom () {
  const tom = new Tom()
  const a = await getAssert()

  tom.test('find primitive, replace with primitive', function () {
    const result = findReplace(
      [1, 2, 3, 4, 2],
      n => n === 2,
      'two'
    )
    a.deepEqual(result, [1, 'two', 3, 4, 'two'])
  })

  tom.test('find primitive, replace with array', function () {
    const result = findReplace(
      [1, 2, 3, 4, 2],
      n => n === 2,
      ['two', 'zwei']
    )
    a.deepEqual(result, [1, ['two', 'zwei'], 3, 4, ['two', 'zwei']])
  })

  tom.test('find primitive, replace with several primitives', function () {
    const result = findReplace(
      [1, 2, 3, 4, 2],
      n => n === 2,
      'two',
      'zwei'
    )
    a.deepEqual(result, [1, 'two', 'zwei', 3, 4, 'two', 'zwei'])
  })

  tom.test('getopt example', function () {
    const result = findReplace(
      ['--one', '1', '-abc', 'three'],
      item => /^-(\w{2,})$/.test(item),
      function (match) {
        return ['-a', '-b', '-c']
      }
    )
    a.deepEqual(result, ['--one', '1', '-a', '-b', '-c', 'three'])
  })

  tom.test('getopt example 2', function () {
    const result = findReplace(
      ['--one', '1', '-abc', 'three'],
      item => /^-(\w{2,})$/.test(item),
      'bread',
      'milk'
    )
    a.deepEqual(result, ['--one', '1', 'bread', 'milk', 'three'])
  })

  tom.test('validation', function () {
    a.throws(
      () => findReplace('not an array'),
      /must be an array/
    )
  })

  return tom
}

export default getTom()
