function solution(arr) {
    if(arr.length==1){
        return [-1];
    }
    let tempArr= [...arr];
    let min= tempArr.sort((a,b)=>a-b)[0];
    return arr.filter((item)=>item!=min);
}