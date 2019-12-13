import arrayify from 'array-back/index.mjs'

/**
 * @module find-replace
 */

/**
 * @param {array} - The input array
 * @param {testFn} - A predicate function which, if returning `true` causes the current item to be operated on.
 * @param [replaceWith] {...any} - If specified, found values will be replaced with these values, else removed.
 * @returns {array}
 * @alias module:find-replace
 */
function findReplace (array, testFn) {
  const found = []
  const replaceWiths = arrayify(arguments)
  replaceWiths.splice(0, 2)

  for (const [index, value] of array.entries()) {
    let expanded = []
    replaceWiths.forEach(replaceWith => {
      if (typeof replaceWith === 'function') {
        expanded = expanded.concat(replaceWith(value))
      } else {
        expanded.push(replaceWith)
      }
    })

    if (testFn(value)) {
      found.push({
        index: index,
        replaceWithValue: expanded
      })
    }
  }

  for (const item of found.reverse()) {
    const spliceArgs = [item.index, 1].concat(item.replaceWithValue)
    array.splice.apply(array, spliceArgs)
  }

  return array
}

export default findReplace
