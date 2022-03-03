const data = [
  '   + -- + - + -   ', 
  '   + --- + - +   ', 
  '   + -- + - + -   ', 
  '   + - + - + - +   '
];
let result = '';

for (const x of data) {
  result += String.fromCharCode(parseInt(x.replace(/ /g, '').replace(/\+/g, 1).replace(/-/g, 0), 2));
}

console.log(result);