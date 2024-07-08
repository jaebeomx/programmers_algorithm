// 가로의 길이는 세로보다 같거나 길다
function solution(brown, yellow) {
    let possibleCase= [];
    const boardCount= brown+yellow;
    // 갈색 격자의 수는 8 이상, 노랜삭 격자의 수는 1 이상이므로 최소 세로 길이는 3
    let height= 3;
    while(height<=boardCount){
        let width= boardCount/height;
        if(boardCount%height===0 && width>=height){
            if(boardCount/height>=3) possibleCase.push([width, height]);
        }
        height++;
    }
    
    for(let [width, height] of possibleCase){
        if((width*2 + height*2 - 4)===brown) return [width, height]
    }
}