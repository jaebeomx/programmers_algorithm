const input = require('fs')
        .readFileSync('./dev/stdin')
        .toString()
        .trim()
        .split('\n')
        .map((v) => v.split(' ').map(Number));
const [N] = input.shift();
let now = 1;
for (let i = 0; i < N; i++) {
        const [x, y] = input[i];
        if (x == now || y == now) {
                if (x == now) {
                        now = y;
                } else {
                        now = x;
                }
        }
}
console.log(now);