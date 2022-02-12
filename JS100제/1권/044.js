let inp = "3849";
let inp2 = 3849;
let result = 0;

// for (const x of inp) {
//   result += parseInt(x);
// }

// console.log(result);

while(inp2 !== 0) {
  result += inp2%10;
  inp2 = Math.floor(inp2/10)
}

console.log(result);