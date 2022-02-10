let inp = "176 156 155 165 166 169";
let sorted = "";

sorted = inp.split(" ").sort().join(" ");

console.log(sorted == inp);