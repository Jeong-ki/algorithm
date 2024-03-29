function averagePair(arr, num){
  if (arr.length < 2) return false;
  let start = 0;
  let end = arr.length - 1;
  while(start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
