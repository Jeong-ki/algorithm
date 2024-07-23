function solution(priorities, location) {
  let count = 0;
  const priArr = priorities.map((item, index) => [item, index]);
  
  while (priArr.length > 0) {
      const [val, idx] = priArr.shift();
      if (priArr.some(item => item[0] > val)) {
          priArr.push([val, idx]);
      } else {
          count++;
          if (idx === location) {
              return count;
          }
      }
  }
  
  return count;
}