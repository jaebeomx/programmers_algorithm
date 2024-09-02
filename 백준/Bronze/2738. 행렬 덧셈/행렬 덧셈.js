let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let [N,M] = input[0].split(' ').map(Number);
 
for(let i=1; i<=N; i++){
  let a = input[i].split(' ').map(Number)  // 첫번째 행렬
  let b = input[i+N].split(' ').map(Number)  // 두번째 행렬
  
  console.log(a.map((x,y) => x + b[y]).join(' '))  //첫번째+두번째 행렬의 합 (map 이용)
};