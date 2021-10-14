function solution(board, moves) {
  let stack = [];
  let result = 0;
  for(let i = 0; i < moves.length; i++) {
    for(let j = 0; j < board.length; j++) {
      if(!board[j][moves[i]-1]) continue 
      else { 
        stack.push(board[j][moves[i]-1]);
        delete board[j][moves[i]-1];
        if(stack[stack.length-1] === stack[stack.length-2]) {
          result += 2;
          stack.length -= 2;
        }
        break;
      }
    }
  }
  console.log(result);
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])