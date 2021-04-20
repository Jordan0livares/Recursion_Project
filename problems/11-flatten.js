/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:


***********************************************************************/

const flatten = nums => {
  debugger
  let result = [];

  nums.forEach(ele => {
    debugger
    if (Array.isArray(ele)) {
      result.push(...flatten(ele))
    } else {
      result.push(ele)
    }
  })
  debugger
  return result
}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
