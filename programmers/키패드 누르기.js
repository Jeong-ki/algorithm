function solution(numbers, hand) {
  let answer = '';
  const numPad = [ [3,1], [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2] ] // 0~9
  let left = [3, 0];
  let right = [3, 2];
  for(let i=0; i<numbers.length; i++) {
    let number = numbers[i];
    if(number===1 || number===4 || number===7) {
      answer += "L";
      left = numPad[number];
    } else if (number===3 || number===6 || number===9) {
      answer += "R";
      right = numPad[number];
    } else {  // 2 5 8 0 일때
      let L = Math.abs((numPad[number][0]-left[0])) + Math.abs((numPad[number][1]-left[1]));
      let R = Math.abs((numPad[number][0]-right[0])) + Math.abs((numPad[number][1]-right[1]))
      if(L<R) {
        answer += "L";
        left = numPad[number];
      } else if (L>R) {
        answer += "R";
        right = numPad[number];
      } else {  // 같을 때 손잡이로 구분
        if(hand === "left") {
          answer += "L";
          left = numPad[number];
        } else {
          answer += "R";
          right = numPad[number];
        }
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));