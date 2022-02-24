let num = "1 2 4 6 5 3";

let numList = num.split(' ').map((v) => parseInt(v)).sort();
console.log(numList);

function solution(numList) {
  for (let i = 0; i < numList.length-1; i++) {
    if(numList[i+1] - numList[i] !== 1) return "NO";
  }
  return "YES";
}

console.log(solution(numList));