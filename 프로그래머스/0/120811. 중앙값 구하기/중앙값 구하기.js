function solution(array) {
    array.sort((a,b)=>a-b);
    let index=Math.ceil(array.length/2)-1
    return array[index];
}