function solution(array) {
    let str= array.join("");
    let count= 0;
    for(i of str){
        count+=i=="7"?1:0;
    }
    return count;
}