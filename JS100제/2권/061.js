const str = "aaabbbbcdddd";
let temp = 1;
let result = str[0];

for (let i=1; i<str.length; i++) {
  if(i === str.length - 1) {
    result += temp+1;
    break;
  }
  if(result[result.length - 1] === str[i]) {
    temp += 1;
  } else {
    result += temp + str[i];
    temp = 1;
  }
}
console.log(result);