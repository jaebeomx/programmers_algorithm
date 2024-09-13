const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let answer = [];
let N = 0;
let sum = BigInt(0);
rl.on('line', function (line) {
	if (N == 0) {
		N = Number(line);
		sum = BigInt(0);
	} else {
		sum += BigInt(line);
		N -= 1;
		if (N == 0) {
			if (sum > BigInt(0)) {
				answer.push('+');
			} else if (sum == BigInt(0)) {
				answer.push('0');
			} else {
				answer.push('-');
			}
		}
	}
}).on('close', function () {
	console.log(answer.join('\n'));
	process.exit();
});