/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

const reverse = string => {
  debugger;
  if(string.length === 0) {
    return "";
  }
  let subStr = reverse(string.slice(0, string.length - 1))
  debugger;
  let result = string[string.length - 1] + subStr;
  return result;
}

console.loge(reverse("house")); // "esuoh"
console.loge(reverse("dog")); // "god"
console.loge(reverse("atom")); // "mota"
console.loge(reverse("q")); // "q"
console.loge(reverse("id")); // "di"
console.loge(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
