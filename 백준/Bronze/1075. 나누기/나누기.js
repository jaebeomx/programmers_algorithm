const [N, F] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

const X = Math.floor(N / 100) * 100;

let answer = 0;

while (true) {
	if ((X + answer) % F == 0) break;
	answer++;
}

console.log(answer.toString().padStart(2, '0'));