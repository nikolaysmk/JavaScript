/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // create a function
    return function() {
        // return a function
        return n++
    };
    // the function will return the value of n and then increment n
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */