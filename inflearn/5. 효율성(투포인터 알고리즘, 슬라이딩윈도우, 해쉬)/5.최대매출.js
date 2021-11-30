function solution(k, arr){
  let answer = 0;
  let temp;
  for(let i=0; i<arr.length-(k-1); i++) {
    temp = 0;
    for(let j=0; j<k; j++) {
      temp += arr[i+j];
    }
    if(temp > answer) answer = temp;
  }
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));