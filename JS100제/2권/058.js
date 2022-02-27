// 1
// const num = "17209754139280561"; // 123,456,789
// let result = num[num.length-1];

// for (let i = num.length-1; i > 0; i--) {
//   result = i%3 === 0 ? "," + num[i] + result : num[i] + result;
// }

// console.log(result);


// 2
// const num = "17209754139280561"; // 123,456,789
// console.log(parseInt(num, 10).toLocaleString());

// 3
const num = "17209754139280561"; // 123,456,789

function comma(s) {
  if(s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
}

console.log(comma(num));