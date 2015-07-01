[![view on npm](http://img.shields.io/npm/v/find-replace.svg)](https://www.npmjs.org/package/find-replace)
[![npm module downloads per month](http://img.shields.io/npm/dm/find-replace.svg)](https://www.npmjs.org/package/find-replace)
[![Build Status](https://travis-ci.org/75lb/find-replace.svg?branch=master)](https://travis-ci.org/75lb/find-replace)
[![Dependency Status](https://david-dm.org/75lb/find-replace.svg)](https://david-dm.org/75lb/find-replace)

<a name="module_find-replace"></a>
## find-replace
**Example**  
```js
> findReplace = require("find-replace");

> findReplace([ 1, 2, 3], 2, "two")
[ 1, 'two', 3 ]

> findReplace([ 1, 2, 3], 2, [ "two", "zwei" ])
[ 1, [ 'two', 'zwei' ], 3 ]

> findReplace([ 1, 2, 3], 2, "two", "zwei")
[ 1, 'two', 'zwei', 3 ]
```
<a name="module_find-replace..findReplace"></a>
### find-replace~findReplace(array, valueTest) ⇒ <code>array</code>
**Kind**: inner method of <code>[find-replace](#module_find-replace)</code>  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| valueTest | <code>valueTest</code> | 
| ... | <code>any</code> | 


* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
