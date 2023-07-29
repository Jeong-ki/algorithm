function solution(arr) {
  let result = [...arr];
  for (let i = 1; i < arr.length; i++) {
    let cur = i;
    for (let j = i - 1; j >= 0; j--) {
      console.log(i, j);
      if (result[cur] > result[j]) break;
      [result[cur], result[j]] = [result[j], result[cur]];
      cur--;
    }
  }
  return result;
}

function solution2(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = temp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution2(arr));
