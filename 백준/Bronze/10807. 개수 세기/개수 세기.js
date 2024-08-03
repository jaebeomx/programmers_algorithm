const fs = require("fs");
let [count, arr, target] = fs.readFileSync("/dev/stdin", "utf-8").split("\n");
count = Number(count);
arr = arr.trim().split(" ").map(Number);
target = Number(target);

let answer = 0;
for (let i = 0; i < count; i++) {
  if (arr[i] === target) {
    answer++;
  }
}

console.log(answer);
