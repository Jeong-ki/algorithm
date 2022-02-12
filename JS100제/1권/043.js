
// console.log(num.toString(2));
let num = 11;
let two = [];

while(num >= 1) {
  two.push(num%2);
  num = Math.floor(num/2);
  console.log(num);
}

console.log(two.reverse());