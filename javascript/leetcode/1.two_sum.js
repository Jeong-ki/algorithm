/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   const numDict = nums.map((num, index) => [num, index]);
//   numDict.sort((a, b) => a[0] - b[0]);
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//       const sum = numDict[left][0] + numDict[right][0];
//       if (sum === target) {
//           return [numDict[left][1], numDict[right][1]];
//       } else if (sum < target) {
//           left++;
//       } else {
//           right--;
//       }
//   }
//   return [];
// };

// var twoSum2 = function(nums, target) {
//   let result = false;
//   const dict = {};
//   nums.map((num, index) => dict[num] = index);

//   nums.map((num, index) => {
//     const n = target - num;
//     if (n in dict && dict[n] !== index) {
//       result = true;
//     }
//   })

//   return result;
// }

// console.log(twoSum2([2,7,11,15], 14));

// var twoSum3 = function (nums, target) {
//   const dict = {};
//   nums.map((value, index) => (dict[value] = index));

//   for (let i = 0; i < nums.length; i++) {
//     let findVal = target - nums[i];
//     if (findVal in dict && i !== dict[findVal]) return [i, dict[findVal]];
//   }
// };

// console.log(twoSum3([3, 2, 4], 6));

var twoSum4 = function (nums, target) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }

    mp.set(nums[i], i);
  }
};
