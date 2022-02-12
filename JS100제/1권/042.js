// function solution(a, b) {
//   const day = ["TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"]; 
//   const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let total = b;
//   for (let i = 0; i < a-1; i++) {
//     total += month[i];
//   }
//   return day[total%7];
// }

// console.log(solution(5, 24));

// const month = prompt('월을 입력하세요.');
// const date = prompt('일을 입력하세요.');

function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(5, 24));