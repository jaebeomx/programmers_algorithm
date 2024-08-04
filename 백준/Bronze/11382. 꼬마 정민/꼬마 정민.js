const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf-8");
const sum = input
  .trim()
  .split(" ")
  .map(Number)
  .reduce((sum, num) => sum + num, 0);

console.log(sum);
