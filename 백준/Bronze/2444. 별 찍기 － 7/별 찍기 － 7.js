const fs = require("fs");

// const input = fs.readFileSync("./test.txt", "utf-8");
const input = fs.readFileSync("/dev/stdin", "utf-8");

const N = parseInt(input, 10);

// 위쪽 피라미드 (1번째 줄부터 N번째 줄까지)
for (let i = 1; i <= N; i++) {
  const stars = "*".repeat(2 * i - 1);
  const spaces = " ".repeat(N - i);
  console.log(spaces + stars);
}

// 아래쪽 피라미드 (N+1번째 줄부터 2N-1번째 줄까지)
for (let i = N - 1; i >= 1; i--) {
  const stars = "*".repeat(2 * i - 1);
  const spaces = " ".repeat(N - i);
  console.log(spaces + stars);
}
