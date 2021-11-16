let arr=[[6, 6], [2, 2], [4, 5], [4, 3], [10, 3]];
let num = [3, 5, 2, 1, 9, 4]
// let test = arr.sort(function(a, b) {
//   if(a[0] === b[0]) return a[1] - b[1];
//   return a[0] - b[0];
// });
let test = arr.sort(function(a, b) {
  return (a[0]+a[1]) - (b[0]+b[1]);
});
console.log(test);