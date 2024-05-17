function solution(arr) {
    return arr.reduce((sum,item)=>sum+item,0)/arr.length;
}