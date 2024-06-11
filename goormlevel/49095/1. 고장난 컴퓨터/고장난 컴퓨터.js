// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let typingCount= null;
	let timeout= null;
	let keyboard= null;
	let letterCount= 0;
	let recentInput= null;
	// timeout 동안은 글자가 남아있음. timeout보다 커지면 코드가 깨끗이 지워짐
	
	
	
	for await (const line of rl) {
		if(typingCount==null && timeout==null){
			let info= line.split(" ").map(Number);
			typingCount= info[0];
			timeout= info[1];
		}else{
			keyboard= line.split(" ").map(Number);
			rl.close();
		}
	}
	if(typingCount===1){
		console.log(1);
		process.exit();
	}
	
	recentInput= keyboard[0];
	letterCount= 1;
	
	for(let i=1; i<keyboard.length; i++){
		if(keyboard[i]-recentInput>timeout){
			letterCount= 1;
			recentInput= keyboard[i];
		}else{
			letterCount+=1;
			recentInput= keyboard[i];
		}
	}
	console.log(letterCount);
	
	process.exit();
})();
