let [num, form] = require('fs').readFileSync(0).toString().trim().split(" ").map((item) => Number(item));

let ans = num.toString(form).toUpperCase();

console.log(ans);