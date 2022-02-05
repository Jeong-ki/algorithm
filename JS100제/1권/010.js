const n = 5 // prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){ // i = 1 2 3 4 5
  let star = '';
  for(let j=1; j<=n-i; j++){ // j = 4, 3, 2, 1, 0
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){ // k = 1, 3, 5, 7, 9
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);