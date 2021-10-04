function solution(nums) {
  let mySet = [...new Set(nums)];
  // let arr = [...mySet]
  return mySet.length > nums.length/2 ? nums.length/2 : mySet.length
}