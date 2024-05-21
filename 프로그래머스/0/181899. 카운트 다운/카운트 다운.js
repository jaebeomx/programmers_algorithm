function solution(start, end_num) {
    let arr= [];
    for(let i=start; i>=end_num; i--){
        arr.push(i);
    }
    return arr;
}