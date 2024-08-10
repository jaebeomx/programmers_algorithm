const fs = require("fs");
// "/dev/stdin"
const input = fs.readFileSync("/dev/stdin", "utf-8");
const studentArr = new Array(30).fill(0);
const studentList = input.split("\n");
for (let num of studentList) {
  studentArr[Number(num) - 1] = 1;
}

studentArr.forEach((item, index) => {
  if (item === 0) {
    console.log(index + 1);
  }
});
