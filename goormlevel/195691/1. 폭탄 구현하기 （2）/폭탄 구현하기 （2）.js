const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let length= null;
let lengthCount= 0;
const land= [];

let bomb= null;
let bombCount= 0;
const bombPosition= [];

const initLand= [];

// 제자리, 상하좌우 순
const spread= [[0,0],[-1,0],[1,0],[0,-1],[0,1]]; 

rl.on('line', (line) => {
	if(length==null && bomb==null){
		const info= line.split(" ").map(Number);
		length= info[0];
		bomb= info[1];
	}else if(lengthCount<length){
		land.push(line.split(" ").map((item)=>{
			if(item=="@"){
				return "@";
			}else if(item=="#"){
				return "#";
			}else{
				return Number(item);
			}
		}));
		lengthCount++;
	}else if(bombCount<bomb){
		bombPosition.push(line.split(" ").map(Number));
		bombCount++;
	}
	if(lengthCount===length && bombCount===bomb) rl.close();
});

rl.on('close', () => {
	for(let i=0; i<length; i++){
		let arr= new Array(length).fill(0);
		initLand.push(arr);
	}
	
	
	bombPosition.forEach(([y,x])=>{
		y-=1;
		x-=1;
		spread.forEach(([dy,dx])=>{
			let yPos= y+dy;
			let xPos= x+dx;
			if(xPos>=0 && xPos<length && yPos>=0 && yPos<length && land[yPos][xPos]!=="#"){
				if(land[yPos][xPos]=="@"){
					initLand[yPos][xPos]+=2;
				}else{
					initLand[yPos][xPos]+=1;
				}
			}	
		})
	})
	
	let maxBombValue = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
                maxBombValue = Math.max(maxBombValue, initLand[i][j]);
        }
    }
    console.log(maxBombValue);
	
	process.exit();
});