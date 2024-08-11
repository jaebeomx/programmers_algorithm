const fs = require("fs");
// "/dev/stdin"
const input = fs.readFileSync("/dev/stdin", "utf-8");
const [word, index] = input.split("\n");
console.log(word[Number(index) - 1]);
