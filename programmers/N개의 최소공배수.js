function solution(arr) {
  let a, b, r, mul;
  while(arr.length > 1) {
    a = arr.pop();
    b = arr.pop();
    mul = a * b;
    while(true) {
      r = a % b;
      if(!r) break;
      a = b;
      b = r;
    }
    arr.push(mul / b);
  }
  return arr;
}

console.log(solution([1, 2, 3]));