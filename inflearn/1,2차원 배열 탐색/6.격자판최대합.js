function solution(arr){
  let row = []; // 가로
  let col = []; // 세로
  let dia = [0, 0]; // 대각선

  for(let i=0; i<arr.length; i++) {
    let add = arr[i].reduce((acc, v) => { return acc + v; }, 0);
    row.push(add);
    let colAdd = 0;
    dia[0] += arr[i][i];
    dia[1] += arr[i][arr.length-1-i]
    for(let j=0; j<arr.length; j++) {
      colAdd += arr[j][i];
    }
    col.push(colAdd);
  }
  let answer = [Math.max(...row), Math.max(...col), Math.max(...dia)]
  return Math.max(...answer);
}

let arr=[[10, 13, 10, 12, 15], 
       [12, 39, 30, 23, 11],
       [11, 25, 50, 53, 15],
       [19, 27, 29, 37, 27],
       [19, 13, 30, 13, 19]];
console.log(solution(arr));