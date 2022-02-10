let inp = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
inp.sort((a, b) => b - a);
let temp = 0;
let count = 0;

for(let i=0; i<3; i++) {
  if(temp !== inp[count]) {
    temp = inp[count];
    count++;
  } else {
    i--;
    count++;
  }
}

console.log(count);