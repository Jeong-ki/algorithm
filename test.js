function solution(s, n) {
  let answer = "";
  for(let i=0; i<s.length; i++) {
    let asc = s.charCodeAt(i);
    answer += String.fromCharCode(asc + n);
    console.log(answer);
  }
}

solution("aa", 1);