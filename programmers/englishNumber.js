function solution(s) {
  // if(s.indexOf("zero") != -1) s = s.replace(/zero/g, '0');
  // if(s.indexOf("one") != -1) s = s.replace(/one/g, '1');
  // if(s.indexOf("two") != -1) s = s.replace(/two/g, '2');
  // if(s.indexOf("three") != -1) s = s.replace(/three/g, '3');
  // if(s.indexOf("four") != -1) s = s.replace(/four/g, '4');
  // if(s.indexOf("five") != -1) s = s.replace(/five/g, '5');
  // if(s.indexOf("six") != -1) s = s.replace(/six/g, '6');
  // if(s.indexOf("seven") != -1) s = s.replace(/seven/g, '7');
  // if(s.indexOf("eight") != -1) s = s.replace(/eight/g, '8');
  // if(s.indexOf("nine") != -1) s = s.replace(/nine/g, '9');

  // s = s.replace(/zero/gi, 0)
  //   .replace(/one/gi, 1)
  //   .replace(/two/gi, 2)
  //   .replace(/three/gi, 3)
  //   .replace(/four/gi, 4)
  //   .replace(/five/gi, 5)
  //   .replace(/six/gi, 6)
  //   .replace(/seven/gi, 7)
  //   .replace(/eight/gi, 8)
  //   .replace(/nine/gi, 9);
  // console.log(s);

  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      answer = arr.join(i);
  }
  console.log(answer);
}

solution("1two45sixseven");