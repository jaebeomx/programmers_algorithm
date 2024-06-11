// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let readLine= null;
	let lineCount= 0;
	let arr= [];
	
	for await (const line of rl) {
		if(readLine==null){
			readLine= Number(line);
		}else{
			arr.push(line);
			lineCount++;
		}
		if(lineCount==readLine) rl.close();
	}
	let birdSound= arr.map((item)=>{
		return item.match(/[aeiouAEIOU]/g)||["???"];
	})
	
	for(let i=0; i<birdSound.length; i++){
		console.log(birdSound[i].join(""));
	}
	
	process.exit();
})();
