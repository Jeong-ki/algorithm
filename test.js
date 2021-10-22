let a = [10, 11, 12, 13, 14, 15];

let answer = a.reduce(function(acc, v) {  // acc: 누적값 v:요소
	return acc+1;  
}, 0);  // 초기화 하는 값

console.log(answer);