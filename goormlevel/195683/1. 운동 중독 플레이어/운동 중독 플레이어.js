const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input= null;

rl.on('line', (line) => {
	input= line;
	
});

rl.on('close', () => {
	let [W, R]= input.split(" ").map(Number);
	console.log(parseInt((1+R/30)*W))
})