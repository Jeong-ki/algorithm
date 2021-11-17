function solution(arr) {
  let mini = Math.min(...arr);
  let index = arr.indexOf(mini);
  arr.splice(index, 1);
  if(!arr.length) arr.push(-1);
  return arr;
}

console.log(solution([4,3,1,9,7]));