function solution(a, b) {
    return a.map((item, index)=>item*b[index]).reduce((sum,item)=>sum+item,0);
}