// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let arr= line.trim().split(" ");
		let sum= arr.reduce((sum, item)=>sum+(+item), 0);
		console.log(sum);
		rl.close();
	}
	
	process.exit();
})();
