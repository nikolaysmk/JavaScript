/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (fnNew) {
  return function (x) {
    return fnNew.reduceRight(function (acc, fn) {
      return fn(acc)
    }, x)
  }
}

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
