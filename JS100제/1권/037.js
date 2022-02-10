let inp = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(' ');
let election = {}
let result = 0;
let temp = 0;

for (let i = 0; i < inp.length; i++) {
  if(!(inp[i] in election)) {
    election[inp[i]] = 1;
  } else {
    election[inp[i]] += 1;
  }
}

for (const x in election) {
  if(election[x] > temp) {
    temp = election[x];
    result = x;
  }
}

console.log(`${result}(이)가 총 ${temp}표로 반장이 되었습니다.`);