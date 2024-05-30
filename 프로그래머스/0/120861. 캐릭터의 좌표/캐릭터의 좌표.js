const move= (item, maxWidth, maxHeight, current)=>{
    switch(item){
        case "left":
            if(current[0]==(-maxWidth)){
                return;
            }else{
                current[0]-=1;
            }
            break;
        case "right":
            if(current[0]==maxWidth){
                return;
            }else{
                current[0]+=1;
            }
            break;
        case "up":
            if(current[1]==maxHeight){
                return;
            }else{
                current[1]+=1;
            }
            break;
        case "down":
            if(current[1]==(-maxHeight)){
                return;
            }else{
                current[1]-=1;
            }
            break;
    }
}

function solution(keyinput, board) {
    let current= [0,0];
    let maxWidth= board[0]%2==0?board[0]/2:Math.floor(board[0]/2);
    let maxHeight= board[1]%2==0?board[1]/2:Math.floor(board[1]/2);
    
    keyinput.forEach(item=>move(item, maxWidth, maxHeight, current));
    return current;
}