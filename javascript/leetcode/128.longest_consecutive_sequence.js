/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. Hash Table
var longestConsecutive = function(nums) {
  let longest = 0;
  let dict = {};

  nums.map(x => dict[x] = x + 1);

  nums.map(x => {
    if (!(dict[x - 1] in dict)) {
      let next = x;
      let cnt = 1;
      console.log(cnt, next);
      while(dict[next] in dict) {
        cnt += 1;
        next += 1;
      }
      if (longest < cnt) longest = cnt;
    }
  });

  return longest;
};

// 2. Sort
var longestConsecutive2 = function(nums) {
  const n = nums.length;

  if (n === 0) return 0;

  nums.sort((a, b) => a - b);

  let cnt = 1;
  let maxi = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        cnt++;
      } else {
        maxi = Math.max(maxi, cnt);
        cnt = 1;
      }
    }
  }

  return Math.max(maxi, cnt);
};

// 3. Map
var longestConsecutive3 = function(nums) {
  let longest = 0;
  let dict = new Map();

  nums.map(x => dict.set(x, x + 1));

  nums.map(x => {
    if(!dict.has(x - 1)) {
      let next = x;
      let cnt = 1;
      while(dict.has(dict.get(next))) {
        cnt += 1;
        next += 1;
      }
      longest = Math.max(longest, cnt);
    }
  });

  return longest;
};

console.log(longestConsecutive3([100,4,200,1,3,2]));
