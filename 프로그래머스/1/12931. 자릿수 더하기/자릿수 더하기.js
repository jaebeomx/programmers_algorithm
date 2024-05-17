function solution(n){
    return n.toString().split("").reduce((sum,item)=>sum+Number(item),0);
}