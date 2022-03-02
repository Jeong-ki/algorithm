let weight = 11;
let count = 0;
while(true) {
  if(weight % 7 === 0) {
    count += weight / 7;
    break;
  }
  weight -= 3;
  count += 1;
  if(weight < 0) {
    count = -1;
    break;
  }
}

console.log(count);