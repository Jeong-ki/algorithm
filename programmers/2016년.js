function solution(a, b) {
  let day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sumDay = b;
  for(let i=0; i<a-1; i++) {
    sumDay += month[i];
  }
  return day[sumDay%7];
}

console.log(solution(5, 24));