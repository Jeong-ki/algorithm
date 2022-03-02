let inp = "복잡한 세상 편하게 살자";
let str = inp.split(" ");
let result = "";

for (const x of str) {
  result += x[0];
}

console.log(result);
