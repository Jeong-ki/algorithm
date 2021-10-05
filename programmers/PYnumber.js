function solution(s){
  var answer = true;
  let num=0;
  for(let i=0; i<s.length; i++){
      if(s[i]=='p' || s[i]=='P') num += 1;
      else if(s[i]=='y' || s[i]=='Y') num -= 1;
  }
  if(num != 0) answer = false
  return answer;
}