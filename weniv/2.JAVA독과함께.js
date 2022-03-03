const data = require('./2.독.json');
let 돌의내구도 = [5, 3, 4, 1, 3, 8, 3];

function solution(돌의내구도, 독) {
  let 생존자 = [];
  
  for (const x of data) {
    let live = true;
    for (let i = x["점프력"] - 1; i < 돌의내구도.length; i+=parseInt(x["점프력"])) {
      돌의내구도[i] -= x["몸무게"];
      if(돌의내구도[i] < 0) {
        live = false;
        break;
      }
    }
    if(live) 생존자.push(x["이름"]);
  }
  return 생존자;
}

console.log(solution(돌의내구도, data));