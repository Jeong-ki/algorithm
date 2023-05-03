function solution(str) {
  let stack = [];
  for (let x of str) {
    if (x === "(") {
      stack.push(")");
    } else if (stack.length === 0 || stack.pop() !== x) {
      return "NO";
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

console.log(solution("((())))"));

function solution2(str) {
  let stack = [];
  for (let x of str) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return "YES";
}
