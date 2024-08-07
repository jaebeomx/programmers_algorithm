const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8");

const number = parseInt(input.trim());
const byteOfInt = 4;
const countOfLong = Math.ceil(number / byteOfInt);
console.log(`${"long ".repeat(countOfLong)}int`);
