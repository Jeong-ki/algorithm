function solution(arr) {
  let temp;
  let index
  for(let i=0; i<arr.length; i++) {
    index = i;
    for(let j=i+1; j<arr.length; j++) {
      if(arr[index]>arr[j]) index = j;
    }
    temp = arr[i]
    arr[i] = arr[index];
    arr[index] = temp;
    console.log(arr);
  }
  return arr;
}

console.log("result: ", solution([13, 5, 11, 7, 23, 15]));