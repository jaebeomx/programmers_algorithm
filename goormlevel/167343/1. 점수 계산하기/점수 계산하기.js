// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let loopCount= null;
	let count= 0;
	let test= [];
	let score= 1;
	let sum= 0;
	
	for await (const line of rl) {
		if(loopCount==null){
			loopCount= +line;
			count++;
		}else{
			test= line.split("");
			count++;
		}
		if(count==loopCount) rl.close();
	}
	for(let i=0; i<loopCount; i++){
		if(test[i]=="O"){
			sum+=score;
			score++;
		}else if(test[i]=="X"){
			score= 1;
		}
	}
	console.log(sum);
	process.exit();
})();
