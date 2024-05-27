function solution(my_string, m, c) {
    let arr= [];
    let answer= "";
    my_string= my_string.split("");
    
    while(my_string.length>=m){
        let slice= my_string.splice(0,m);
        arr.push(slice);
    }
    
    for(let i=0; i<arr.length; i++){
        answer= answer+arr[i][c-1];
    }
    
    return answer;
    
}