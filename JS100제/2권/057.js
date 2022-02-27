let num = "";
for (let i = 0; i < 1001; i++) {
  num += i;
}
console.log(num.match(/1/g).length);

// const obj = {};

// for (let i = 0; i <= 1000; i++) {
//     let tmp = i;
//     while (tmp > 0) {
//         let num = tmp % 10;
//         if (obj[num]) {
//             obj[num]++;
//         } else {
//             obj[num] = 1;
//         }
//         tmp = parseInt(tmp/10, 10);
//     }
// }

// console.log(obj[1]);