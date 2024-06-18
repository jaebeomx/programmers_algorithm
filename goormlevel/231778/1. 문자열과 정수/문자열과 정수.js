// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr= [];
	let count= 0;
	
	for await (const line of rl) {
		arr.push(line);
		count++;
		if (count===2) rl.close();
	}
	
	console.log(arr[0]+arr[1]);
	console.log(Number(arr[0])+Number(arr[1]));
	
	process.exit();
})();
