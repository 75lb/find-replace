(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.findReplace = factory());
}(this, (function () { 'use strict';

  /**
   * @module find-replace
   */

  /**
   * @param {array} - The input array
   * @param {testFn} - A predicate function which, if returning `true` causes the current item to be operated on.
   * @param [replaceWith] {...any} - If specified, each found value will be replaced with these values, else removed. If the `replaceWith` value is a function, it will be invoked with the found item and its result used as the replace value.
   * @returns {array}
   * @alias module:find-replace
   */
  function findReplace (array, testFn, ...replaceWiths) {
    const found = [];
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array')
    }

    for (const [index, value] of array.entries()) {
      let expanded = [];
      replaceWiths.forEach(replaceWith => {
        if (typeof replaceWith === 'function') {
          expanded = expanded.concat(replaceWith(value));
        } else {
          expanded.push(replaceWith);
        }
      });

      if (testFn(value)) {
        found.push({
          index: index,
          replaceWithValue: expanded
        });
      }
    }

    for (const item of found.reverse()) {
      const spliceArgs = [item.index, 1].concat(item.replaceWithValue);
      array.splice.apply(array, spliceArgs);
    }

    return array
  }

  return findReplace;

})));
