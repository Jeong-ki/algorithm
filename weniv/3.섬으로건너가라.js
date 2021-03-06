let 대기인원 = 14000605;

/*
9 ~ 21시
한시간 동안 타는 인원수
9 : 25
910 : 40
920 : 55 
930 : 70
940 : 85
950 : 100
100 * 12 == 1200
*/

function 배를건너는시간(대기인원) {
  let 연 = 0, 월 = 0, 일 = 0, 시 = 0, 분 = 0;

  let 걸린일수 = 대기인원/1200;
  let 일년일수 = 0;
  for (let i = 1; i < 11; i++) {
    일년일수 += 2**i;
  }
  년 = parseInt((대기인원/1200)/일년일수, 10);

  let 걸린월수 = 0;
  let 나머지일수 = (대기인원/1200)%일년일수;
  for (let i = 10; i > 0; i--) {
    걸린월수++;
    if(나머지일수 < 2**i) {
      break;
    }
    나머지일수 = 나머지일수 - 2**i;
  }
  일 = parseInt(나머지일수, 10);
  월 = parseInt(걸린월수 - 1, 10);
  시 = parseInt((대기인원%1200)/100 + 9, 10);

  let 출발분 = [25, 40, 55, 70, 85, 100];
  let 최종계산된분 = 0;

  for (const variable in 출발분) {
    if(출발분[variable] > (대기인원%1200)%100) {
      최종계산된분 = variable*10;
      break;
    }
  }

  let date = new Date();
  최종계산된분 = 최종계산된분 + date.getMinutes();
  if(최종계산된분 > 60) {
    최종계산된분 = 최종계산된분 - 60;
    시 += 1;
  }
  분 = 최종계산된분;

  return `
    ${년}년
    ${월}월
    ${일}일
    ${시}시
    ${분}분
  `
}

console.log(배를건너는시간(대기인원));