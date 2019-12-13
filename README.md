[![view on npm](http://img.shields.io/npm/v/find-replace.svg)](https://www.npmjs.org/package/find-replace)
[![npm module downloads](http://img.shields.io/npm/dt/find-replace.svg)](https://www.npmjs.org/package/find-replace)
[![Build Status](https://travis-ci.org/75lb/find-replace.svg?branch=master)](https://travis-ci.org/75lb/find-replace)
[![Dependency Status](https://badgen.net/david/dep/75lb/find-replace)](https://david-dm.org/75lb/find-replace)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# find-replace

Replace or remove multiple items in an array. The built-in `array.splice()` method only operates on one item at a time and requires you to know its index.

## Synopsis

```js
> const findReplace = require('find-replace')

> const numbers = [ 1, 2, 3]

> findReplace(numbers, n => n === 2, 'two')
[ 1, 'two', 3 ]

> findReplace(numbers, n => n === 2, [ 'two', 'zwei' ])
[ 1, [ 'two', 'zwei' ], 3 ]

> findReplace(numbers, n => n === 2, 'two', 'zwei')
[ 1, 'two', 'zwei', 3 ]

> findReplace(numbers, n => n === 2) // no replacement, so remove
[ 1, 3 ]
```

# API Reference

<a name="module_find-replace"></a>

## find-replace
<a name="exp_module_find-replace--findReplace"></a>

### findReplace(array, testFn, [...replaceWith]) ⇒ <code>array</code> ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | The input array |
| testFn | <code>testFn</code> | A predicate function which, if returning `true` causes the current item to be operated on. |
| [...replaceWith] | <code>any</code> | If specified, found values will be replaced with these values, else removed. |


# Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const findReplace = require('find-replace')
```

Within Node.js with ECMAScript Module support enabled:

```js
import findReplace from 'find-replace'
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

&copy; 2015-20 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
