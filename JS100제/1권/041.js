let num = 13;
let check = true;

for (let i = 2; i < num/2; i++) {
  if(num%i === 0) {
    check=false;
    break;
  }
}
if(num === 1){
  console.log("NO");
} else if(check) {
  console.log("YES");
} else {
  console.log("NO");
}