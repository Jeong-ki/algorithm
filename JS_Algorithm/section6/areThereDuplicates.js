// 빈도 수 세기
function areThereDuplicates(...args) {
  let a = {};
  for (const val of args) {
    a[val] = a[val] ? a[val] += 1 : 1;
    if (a[val] > 1) return true;
  }
  return false;
}

areThereDuplicates(1, 2, 2, 3);

// 다중 포인터
function areThereDuplicates2(...args) {
  args.sort();
  let start = 0;
  let next = 1;
  while(next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }
  return false;
}

areThereDuplicates2(1, 3, 2, 3, 9);

// 한줄컷
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}