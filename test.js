const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.has('a'));
console.log(map1.has('zxc'));
console.log(map1); 
// output: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

for(let x of map1) {
  console.log(x);
}
// output
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]

for(let [k, v] of map1) {
  console.log(k, v);
}
// output
// a 1
// b 2
// c 3