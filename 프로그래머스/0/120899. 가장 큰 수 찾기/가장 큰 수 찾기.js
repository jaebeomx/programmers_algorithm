function solution(array) {
    let copyArr= [...array];
    copyArr.sort((a,b)=>b-a);
    
    let max= copyArr[0];
    let idx= array.findIndex((item)=>item==max);
    
    return [max, idx];
}