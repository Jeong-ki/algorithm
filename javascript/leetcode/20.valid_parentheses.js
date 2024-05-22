/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   let stack = [];

//   for (let x of s) {
//       if (x === "(") {
//           stack.push(")");
//       } else if (x === "{") {
//           stack.push("}");
//       } else if (x === "[") {
//           stack.push("]")
//       } else if (stack.length === 0 || x !== stack.pop()) {
//           return false;
//       }
//   }
//   return stack.length === 0;
// };

var isValid = function (s) {
  let stack = [];
  for (const c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        stack.length === 0 ||
        (c === ")" && stack[stack.length - 1] !== "(") ||
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
