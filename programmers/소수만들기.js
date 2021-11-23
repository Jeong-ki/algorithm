function solution(nums) {
  let count = 0;
  for(let i=0; i<nums.length-2; i++) {
    for(let j=i+1; j<nums.length; j++) {
      for(let k=j+1; k<nums.length; k++) {
        let number = nums[i]+nums[j]+nums[k];
        let check = true;
        for(let x=2; x<number/2; x++) {
          if(number%x === 0){ 
            check = false;
            break;
          } 
        }
        if(check) count++;
      }
    }
  }
  return count;
}

console.log(solution([1,2,7,6,4]));
