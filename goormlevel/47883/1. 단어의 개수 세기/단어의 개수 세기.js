// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	if(line.trim().length==0){
		console.log(0);
		rl.close();
	}else{
		console.log(line.trim().split(/\s+/).length);
	rl.close();
	}
}).on("close", function() {
	process.exit();
});