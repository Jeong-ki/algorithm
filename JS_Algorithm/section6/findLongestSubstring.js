function findLongestSubstring(str) {
  let start = 0;
  let subLen = 0;
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (obj[word]) {
      start = Math.max(start, obj[word]);
    }
    
    subLen = Math.max(subLen, i - start + 1);
    obj[word] = i + 1;
  }
  return subLen;
}

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6