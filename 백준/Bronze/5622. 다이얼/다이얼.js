const fs = require("fs");

// const input = fs.readFileSync("./test.txt", "utf-8");
const input = fs.readFileSync("/dev/stdin", "utf-8");

// 2를 걸려면 총 3초가 필요함 따라서 +1초씩 더 걸린다고 생각하면 됨
const dialNumber = {
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};

const dialNumberArr = Object.entries(dialNumber);
let time = 0;

for (const ch of input.trim()) {
  for (let i = 0; i < dialNumberArr.length; i++) {
    if (dialNumberArr[i][1].includes(ch)) {
      time += Number(dialNumberArr[i][0]) + 1;
      break;
    }
  }
}

console.log(time);
