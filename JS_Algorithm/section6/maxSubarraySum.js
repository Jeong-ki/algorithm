function maxSubarraySum(arr, num){
  if (arr.length < num) return null;

  let sum = 0;
  for(let i = 0; i < num; i++) {
    sum += arr[i];
  }
  let currentSum = sum;
  for (let i = num; i < arr.length; i++) {
    currentSum += arr[i] - arr[i-num];
    if(sum < currentSum) sum = currentSum;
  }
  return sum;
}

// maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 