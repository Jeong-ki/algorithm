function solution(n, arr1, arr2) {
  var answer = [];

  for(let i=0; i<n; i++) {
    let line = "";
    let one = arr1[i].toString(2);
    let two = arr2[i].toString(2);
    for(let i=0; i<n; i++) {
      if(one[(one.length-1) - i]==="1" || two[(two.length-1) - i]==="1") {
        line = "#" + line;
      } else {
        line = " " + line;
      }
    }
    answer.push(line);
  }
  
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));