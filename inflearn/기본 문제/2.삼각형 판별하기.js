function solution(a, b, c){
  let maxNum = Math.max(a, b, c);
  let add = a+b+c - maxNum;
  if(add>maxNum) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(solution(13, 33, 17));