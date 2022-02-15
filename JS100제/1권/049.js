let inp = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let result = 0;
// console.log(Math.max(...inp));

for (const x of inp) {
  result = result < x ? x : result;
}
console.log(result);