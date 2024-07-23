// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 1. sort & startsWith
function solution(phone_book) {
  const sortBook = phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    // if (sortBook[i] === sortBook[i + 1].slice(0, sortBook[i].length)) return false
    if (sortBook[i + 1].startsWith(sortBook[i])) return false;
  }

  return true;
}

// 2. hash
function solution(phone_book) {
  const hashMap = new Map();
  phone_book.forEach((phone) => {
    hashMap.set(phone, 1);
  });
  for (let nums of phone_book) {
    let findNum = "";
    for (let num of nums) {
      findNum += num;
      if (hashMap.has(findNum) && findNum !== nums) return false;
    }
  }
  return true;
}
