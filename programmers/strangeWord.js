function solution(s) {
  let word = s.split(' ');
  let answer='';
  for(let i=0; i<word.length; i++){
    for(let j=0; j<word[i].length; j++){
      if(j%2==0) { answer += word[i][j].toUpperCase(); }
      else { answer += word[i][j].toLowerCase(); }
    }
    if(i<word.length-1) answer += ' ';
  }
  console.log(answer);
}

solution("try hello world");
