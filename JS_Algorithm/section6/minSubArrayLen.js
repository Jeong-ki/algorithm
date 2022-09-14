// solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if(total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// my solution
function minSubArrayLen2(arr, num) {
  let first = 0;
  let second = 0;

  let count = Infinity;
  let sum = arr[0];

  while(second < arr.length) {
    if(sum >= num) {
      if(count > second - first + 1) {
        count = second - first + 1;
      }
      sum -= arr[first];
      first++;
    } else {
      second++;
      sum += arr[second];
    }
  }
  return count === Infinity ? 0 : count;
}