function solution(new_id) {
  let id = new_id.toLowerCase(); // 1단계
  const condition = "abcdefghijklmnopqrstuvwxyz0123456789-_.";
  id = id.split('');
  for(let i=0; i<id.length; i++) {
    if(condition.indexOf(id[i]) === -1) { // 2단계
      id.splice(i, 1);
      i--;
    }
    if(id[i]==="." && id[i-1]===".") { // 3단계
      id.splice(i, 1);
      i--;
    }
  }
  if(id[0] === ".") id.shift();  // 4단계
  if(id[id.length-1] === ".") id.pop();
  
  if(id[0] === undefined) { // 5단계
    return "aaa";
  }

  if(id.length>=16) { // 6단계
    id = id.slice(0, 15);
    if(id[id.length-1]===".") id.pop();
  }

  if(id.length === 2) return id[0]+id[1]+id[1]; // 7단계
  else if(id.length === 1) return id[0]+id[0]+id[0];

  return id.join('');
}

solution("...!@BaT#*..y.abcdefghijklm");