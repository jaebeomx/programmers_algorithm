// Run by Node.js
const readline = require('readline');

(async () => {
	let rl= readline.createInterface({input: process.stdin});
	
	for await (const line of rl) {
		let num= +line;
		console.log(num.toString(2));
		rl.close();
	}
	
	process.exit();
})();
