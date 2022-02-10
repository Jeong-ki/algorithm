let 제한무게 = 50;
let 친구수 = 5;
let 친구무게 = [20, 20, 30, 20, 20];
친구무게.sort();
let count = 0;

for(let i=0; i<친구수; i++) {
  제한무게 -= 친구무게[i];
  if(제한무게 < 0) break;
  count++;
}

console.log(count);