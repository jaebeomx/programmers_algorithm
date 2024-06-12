// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let friendsNumber= null;
	let friendsTrack= null;
	let myTrack= null;
	let matchCount= 0;
	
	for await (const line of rl) {
		if(friendsNumber==null){
			friendsNumber= Number(line);
		}else if(friendsTrack==null){
			friendsTrack= line.split(" ");
		}else{
			myTrack= line;
		}
		if(myTrack!==null&&friendsTrack!==null&&friendsNumber!==null)
			rl.close();
	}
	for(let i=0; i<friendsNumber; i++){
		if(friendsTrack[i]==myTrack)
			matchCount++;
	}
	
	console.log(matchCount);
	
	process.exit();
})();
