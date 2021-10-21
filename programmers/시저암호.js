function solution(s, n) {
  let answer = "";
  for(let i=0; i<s.length; i++) {
    let asc = s.charCodeAt(i);
    if(asc<65) {
      answer += " ";
      continue;
    }
    if((asc<=90 && asc+n>90) || (asc<=122 && asc+n>122)) asc -= 26;
    answer += String.fromCharCode(asc + n);
  }
  console.log(answer);
}

solution("abb", 1);