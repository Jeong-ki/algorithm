function solution(arr){  
  let answer=0;
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      let top = i-1 >= 0 ? arr[i-1][j] : 0;
      let bottom = i+1 < arr.length ? arr[i+1][j] : 0;
      let left = j-1 >= 0 ? arr[i][j-1] : 0;
      let right = j+1 < arr.length ? arr[i][j+1] : 0;

      if(arr[i][j] > top && arr[i][j] > bottom &&
      arr[i][j] > left && arr[i][j] > right) {
        answer += 1;
      }
    }
  }
  return answer;
}

let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];
console.log(solution(arr));