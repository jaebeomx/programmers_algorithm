const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let tasks= null;
let time= null;
const task= [];
rl.on('line', (line) => {
	if(tasks===null){
		tasks= Number(line);
	}else if(time===null){
		time= line;
	}else{
		task.push(line);
	}
	if(task.length===tasks) rl.close();
});

rl.on('close', () => {
	const [hour, minute]= time.split(" ").map(Number);
	let totalMinute= (hour*60)+minute;
	totalMinute+=task.map(Number).reduce((total, minute)=>total+minute, 0);
	let finalHour= Math.floor(totalMinute/60)%24;
	let finalMinute= totalMinute%60;
	console.log(`${finalHour} ${finalMinute}`);
})
// N개의 기능 개발 추가 필요
// 