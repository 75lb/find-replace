"use strict";
var t = require("typical");
var arrayify = require("array-back");

/**
Find and replace items in an array.

@module find-replace
@example
> findReplace = require("find-replace");

> findReplace([ 1, 2, 3], 2, "two")
[ 1, 'two', 3 ]

> findReplace([ 1, 2, 3], 2, [ "two", "zwei" ])
[ 1, [ 'two', 'zwei' ], 3 ]

> findReplace([ 1, 2, 3], 2, "two", "zwei")
[ 1, 'two', 'zwei', 3 ]
*/
module.exports = findReplace;

function testValue(value, test){
    if (t.isPlainObject(test)){
        return Object.keys(test).every(function(prop){
            return testValue(value[prop], test[prop]);
        });
    } else if (Array.isArray(test)){
        var tests = test;
        return tests.some(function(test){
            return testValue(value, test);
        });    
    } else if (test instanceof RegExp){
        return test.test(value);
    } else if (typeof test === "function"){
        return test(value);
    } else {
        return test === value;
    }
}

/**
@param {array} - the input array
@param {valueTest} - a query to match the value you're looking for
@param [...replaceWith] {any} - optional replacement items
@returns {array}
@alias module:find-replace
*/
function findReplace(array, valueTest){
    var found = [];
    var replaceWith = arrayify(arguments);
    replaceWith.splice(0, 2);
    
    arrayify(array).forEach(function(value, index){
        if (testValue(value, valueTest)){
            found.push(index);
        }
    });

    found.reverse().forEach(function(index){
        var spliceArgs = [ index, 1 ].concat(replaceWith);
        array.splice.apply(array, spliceArgs);
    });
    
    return array;
}
