// 1. 합이 0인 쌍 찾기
// 양쪽에서 교차하는 투 포인터
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } 
    if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));


// 2. count unique values
// 왼쪽에서 시작하는 두 개의 포인터 사용, 별도의 변수 없이 찾음
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// console.log(countUniqueValues([1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));


// 3. Sliding Window - O(N)
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); 


// 4. 분할과 정복 패턴 / 분할 정복 알고리즘 (이진 탐색)
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  let count = 0;

  while (min <= max) {
    count++;
    let middle = Math.floor((min + max) / 2);
    console.log(middle);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    }
    else if (array[middle > val]) {
      max = middle - 1;
    } else {
      return [middle, count]; // 찾는 값의 index, 찾은 횟수
    }
  }

  return -1;
}
console.log(search([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 16));