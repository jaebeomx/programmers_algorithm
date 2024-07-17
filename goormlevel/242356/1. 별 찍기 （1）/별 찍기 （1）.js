// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let count= null;
	
	for await (const line of rl) {
		count= line;
		rl.close();
	}
	
	for(let i=1; i<=count; i++){
		let str= "*".repeat(i);
		console.log(str);
	}
	
	process.exit();
})();
