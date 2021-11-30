function solution(numbers) {
  numbers.sort((a, b) => {
    if(''+a+b < ''+b+a) return 1;
    if(''+a+b > ''+b+a) return -1;
  });
  let answer = numbers.reduce(function(acc, v) {
    if(v===0) return acc+v;
    return ""+acc+v;
  });
  return answer+"";
}

console.log(solution([3, 30, 34, 5, 9]));
