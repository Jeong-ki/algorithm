let nested = [[1, 2, 3], [4, 5, 6, [99, 22]], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat);