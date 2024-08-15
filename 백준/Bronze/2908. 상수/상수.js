const fs = require("fs");

// const input = fs.readFileSync("./test.txt", "utf-8");
const input = fs.readFileSync("/dev/stdin", "utf-8");

const [numA, numB] = input
  .trim()
  .split(" ")
  .map((item) => {
    return Number(item.split("").reverse().join(""));
  });

console.log(Math.max(numA, numB));
