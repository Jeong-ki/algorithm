// 1
let zero = "";
let one = "a";
let two = "aa";
let three = "aaa";
let nine = "aaaaaaaaa";

console.log("" + two.length + zero.length + one.length + nine.length + zero.length + nine.length + two.length + three.length);

// 2
const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';

console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`);