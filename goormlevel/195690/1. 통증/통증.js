const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on('line', (line) => {
	let N= parseInt(line.trim());
	let items= [14,7,1];
	let count= 0;
	
	for(let item of items){
		count+=Math.floor(N/item);
		N%=item;
	}
	
	console.log(count);
	rl.close();
});

rl.on('close', () => {
	
})