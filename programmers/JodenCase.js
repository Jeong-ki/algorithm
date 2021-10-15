function solution(s) {
  s = s.toLowerCase();
  let arr = s.split(' ');
  // console.log(arr);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 0) continue;
    arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
  }
  console.log(arr.join(' '));
}
solution("  3people  unFollowed me");