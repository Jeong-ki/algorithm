const num = "1234567891011121314151617181920";
let result = 0;

for (let i = 0; i < num.length; i++) {
  result += parseInt(num[i]);
}
console.log(result);