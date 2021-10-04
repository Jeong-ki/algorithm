function solution(nums) {
  let pick = []
  let answer = 0;
  nums.forEach(function(i){
    if(pick.indexOf(i) == -1) pick.push(i);
  });
  if(pick.length>nums.length/2) answer = nums.length/2
  else answer = pick.length;
  return answer;
}