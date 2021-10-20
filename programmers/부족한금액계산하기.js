function solution(price, money, count) {
  let need = 0;
  for(let i=1; i<count+1; i++) {
    need += price*i;
  }
  if(need-money <= 0) {
    return 0;
  } else {
    return need-money;
  }
}

solution(3, 20, 4)