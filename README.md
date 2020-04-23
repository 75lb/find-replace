[![view on npm](http://img.shields.io/npm/v/find-replace.svg)](https://www.npmjs.org/package/find-replace)
[![npm module downloads](http://img.shields.io/npm/dt/find-replace.svg)](https://www.npmjs.org/package/find-replace)
[![Build Status](https://travis-ci.org/75lb/find-replace.svg?branch=master)](https://travis-ci.org/75lb/find-replace)
[![Dependency Status](https://badgen.net/david/dep/75lb/find-replace)](https://david-dm.org/75lb/find-replace)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# find-replace

Replace or remove multiple items in an array.

Similar to [array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) with the following differences:

* `splice` only operates on one item at a time requiring you to know its index. `find-replace` will operate on every item satisfying the find function.
* If a function is passed as a `replaceWith` argument, `find-replace` will invoke it to compute the replacement value.

## Synopsis

```js
const findReplace = require('find-replace')

const colours = ['red', 'white', 'blue', 'white']

const result = findReplace(
  colours,
  colour => colour === 'white',
  'gold'
)

console.log(result)
// [ 'red', 'gold', 'blue', 'gold' ]
```

If the `replaceWith` value is a function, it will be invoked with the found item and its result used as the replace value. For example:


```js
const colours = ['red', 'white', 'blue', 'white']

const result = findReplace(
  colours,
  colour => colour === 'red',
  colour => colour.split('')
)

console.log(result)
// [ 'r', 'e', 'd', 'white', 'blue', 'white' ]
```

## Real world example

This example explodes combined (`-vrf`) into individual flags (`-v -r -f`).

```js
import findReplace from 'find-replace/index.mjs'

const argv = ['-vrf', 'file1.js', 'file2.js']
const combinedShortOptionRe = /^-[^\d-]{2,}$/

function expandCombinedShortArg (arg) {
  return arg
    .slice(1) /* remove initial hypen */
    .split('')
    .map(letter => '-' + letter)
}

const result = findReplace(
  argv,
  arg => combinedShortOptionRe.test(arg),
  expandCombinedShortArg
)

console.log(result)
```

Output:

```
$ node example/argv.mjs
[ '-v', '-r', '-f', 'file1.js', 'file2.js' ]
```

# API Reference

<a name="module_find-replace"></a>

## find-replace
<a name="exp_module_find-replace--findReplace"></a>

### findReplace(array, findFn, [...replaceWith]) ⇒ <code>array</code> ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | The input array |
| findFn | <code>function</code> | A predicate function which, if returns `true` causes the current item to be operated on. |
| [...replaceWith] | <code>any</code> | If specified, each found value will be replaced with these values, else removed. If a `replaceWith` value is a function, it will be invoked with the found item and its result used as the replace value. |


# Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const findReplace = require('find-replace')
```

Within Node.js with ECMAScript Module support enabled:

```js
import findReplace from 'find-replace/index.mjs'
```

Within an modern browser ECMAScript Module:

```js
import findReplace from './node_modules/find-replace/index.mjs'
```

Old browser (adds `window.findReplace`):

```html
<script nomodule src="./node_modules/find-replace/dist/index.js"></script>
```

* * *

&copy; 2015-20 Lloyd Brookes \<75pound@gmail.com\>.

Isomorphic test suite by [test-runner](https://github.com/test-runner-js/test-runner) and [web-runner](https://github.com/test-runner-js/web-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
