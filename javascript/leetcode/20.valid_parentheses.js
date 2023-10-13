/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  for (let x of s) {
      if (x === "(") {
          stack.push(")");
      } else if (x === "{") {
          stack.push("}");
      } else if (x === "[") {
          stack.push("]")
      } else if (stack.length === 0 || x !== stack.pop()) {
          return false;
      }
  }
  return stack.length === 0;
};