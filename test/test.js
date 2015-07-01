var test = require("tape");
var findReplace = require("../");

function fixture(){
    return [ 1, 2, 3, 4, 2 ];
}

test("find primitive, replace with primitive", function(t){
    t.deepEqual(
        findReplace(fixture(), 2, "two"), 
        [ 1, "two", 3, 4, "two" ]
    );
    t.end();
});

test("find primitive, replace with array", function(t){
    t.deepEqual(
        findReplace(fixture(), 2, [ "two", "zwei" ]), 
        [ 1, [ "two", "zwei" ], 3, 4, [ "two", "zwei" ] ]
    );
    t.end();
});

test("find primitive, replace with several primitives", function(t){
    t.deepEqual(
        findReplace(fixture(), 2, "two", "zwei"), 
        [ 1, "two", "zwei", 3, 4, "two", "zwei" ]
    );
    t.end();
});
