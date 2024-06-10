// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let point= line.trim().split(" ").sort((a,b)=>a-b);
		let [a,b,c,d]= point;
		console.log((d-a)+(c-b));
		rl.close();
	}
	
	process.exit();
})();
