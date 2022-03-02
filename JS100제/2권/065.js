// 1. for
// let a = [1, 2, 3, 4];
// let b = ["a", "b", "c", "d"];
// let count = a.length;
// let result = [];

// for (let i = 0; i < count; i++) {
//   if(i % 2 === 0) {
//     console.log();
//     result.push([a.shift(), b.shift()]);
//   } else {
//     result.push([b.shift(), a.shift()]);
//   }
// }

// console.log(result);

// 2. forEach
// const a = [1, 2, 3, 4];
// const b = ['a', 'b', 'c', 'd'];
// let c = [];

// a.forEach(function(e, i){
//   if(i%2 === 0) {
//     c.push([e, b[i]]);
//   } else {
//     c.push([b[i], e]);
//   }
// })

// console.log(c);

// 3. map
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

let c = a.map((e, i) => {
  if(i%2 === 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});

console.log(c);