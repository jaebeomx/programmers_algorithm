function solution(board) {
    let zone= [
        [0,0],
        [0,1],
        [0,-1],
        [1,0],
        [1,1],
        [1,-1],
        [-1,0],
        [-1,1],
        [-1,-1],
    ]
    
    const dangerZone= new Set([]);
    
    let length= board.length;
    
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            if(board[i][j]==1){
                zone.forEach((v)=>{
                    let [col, row]= [i+v[0], j+v[1]];
                    if(col>=0 && col<length && row>=0 && row<length){
                        dangerZone.add(col+" "+row)
                    }
                })
            }
        }
    }
    console.log(dangerZone);
    return ((length*length) - dangerZone.size)
}