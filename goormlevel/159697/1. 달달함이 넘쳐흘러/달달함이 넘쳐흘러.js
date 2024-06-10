// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount= 0;
	let cakeA= [];
	let cakeC= [];
	
	// 케이크 수 a=b는 a와 b의 x,y,z 셋 다 같아야함
	// a 케이크연산 b= (a.z+b.x, a.y*b.y, a.x+b.z)
	// a 케이크연산 b가 c이게끔 하는 케이크 수 b 구하기
	
	for await (const line of rl) {
		if(lineCount==0){
			cakeA= line.split(" ");
			lineCount++;
		}else if(lineCount==1){
			cakeC= line.split(" ");
			lineCount++;
		}else if(lineCount==2){
			rl.close();
		}
	}
	let [Ax, Ay, Az]= cakeA;
	let [Cx, Cy, Cz]= cakeC;
	
	let cakeB= [];
	cakeB.push(Cx-Az);
	cakeB.push(Cy/Ay);
	cakeB.push(Cz-Ax);
	
	let [Bx, By, Bz]= cakeB;
	let str= `${Bx} ${By} ${Bz}`;
	console.log(str);
	
	process.exit();
})();
