/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numDict = nums.map((num, index) => [num, index]);
  numDict.sort((a, b) => a[0] - b[0]);
  let left = 0; 
  let right = nums.length - 1;
  while (left < right) {
      const sum = numDict[left][0] + numDict[right][0];
      if (sum === target) {
          return [numDict[left][1], numDict[right][1]];
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }
  return [];
};

var twoSum2 = function(nums, target) {
  let result = false;
  const dict = {};
  nums.map((num, index) => dict[num] = index);

  nums.map((num, index) => {
    const n = target - num;
    if (n in dict && dict[n] !== index) {
      result = true;
    }
  })

  return result;
}

console.log(twoSum2([2,7,11,15], 14));