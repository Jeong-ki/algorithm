// function solution(버스시간표, 현재시간) {
//   let now = 현재시간.split(":");
//   let bus = 버스시간표.map(function(v, i) {
//     return v.split(":");
//   });
//   let result = [];
  
//   for (const x of bus) {
//     let 시간 = x[0] - now[0];
//     let 분 = x[1] - now[1];
//     if(분 < 0) {
//       시간 -= 1;
//       분 += 60;
//     }
//     if(시간 < 0) {
//       result.push('지나갔습니다');
//     } else {
//       result.push(`${시간.toString().padStart(2, '0')}시간 ${분.toString().padStart(2, '0')}분`);
//     }
//   }
//   return result;
// }

function solution(버스시간, 기준시간) {
  let answer = [];
  기준시간 = 기준시간.split(':').map(n => parseInt(n, 10));
  기준시간 = (기준시간[0] * 60) + 기준시간[1];

  for (const i in 버스시간) {
    let time = 버스시간[i].split(':').map(n => parseInt(n, 10));
    time = (time[0] * 60) + time[1];

    if(time < 기준시간) {
      answer.push('지나갔습니다.');
    } else {
      let 시간 = parseInt((time - 기준시간) / 60, 10);
      let 분 = (time - 기준시간) % 60;
      answer.push(String(시간).padStart(2, 0) + '시간 ' + String(분).padStart(2, 0) + '분');
    }
  }
  return answer;
}

console.log(solution(["12:30", "13:20", "14:13"], "12:40"));