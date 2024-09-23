const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, k] = input[0].split(" ");
let nums = input[1].split(",").map((num) => parseInt(num));

for (let i = 0; i < k; i++) {
  for (let j = nums.length - 1; j >= 0; j--) {
    nums[j] = nums[j] - nums[j - 1];
  }
  nums.splice(0, 1);
}
console.log(nums.join(","));