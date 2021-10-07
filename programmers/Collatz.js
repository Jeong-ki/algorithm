function solution(num) {
  let i=0;
  while(i<500){
      if(num==1) break;
      if(num%2 == 0) { num /= 2 }
      else { num = num*3 + 1 }
      i++
      console.log(num);
  }
  if(i==500) { return -1 }
  else { return i }
}