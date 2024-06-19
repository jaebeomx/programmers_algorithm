// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		rl.close();
	}
	let str= ` / \\__
(    @\\___
 /         O
/   (_____/
/_____/   U`
	
	console.log(str);
	
	process.exit();
})();
