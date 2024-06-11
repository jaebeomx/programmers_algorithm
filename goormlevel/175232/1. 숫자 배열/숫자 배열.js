// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let length= null;
	let arr= [];
	let number= 1;
	
	for await (const line of rl) {
		if(length==null) length= Number(line);
		rl.close();
	}
	
	for(let i=0; i<length; i++){
		let tempArr= [];
		for(let j=0; j<length; j++){
			tempArr.push(number);
			number++;
		}
		arr.push(tempArr);
	}
	for(let i=0; i<arr.length; i++){
		console.log(arr[i].join(" "));
	}
	
	process.exit();
})();
