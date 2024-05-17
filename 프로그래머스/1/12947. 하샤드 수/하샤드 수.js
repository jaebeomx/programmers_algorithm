function solution(x) {
    let num= x.toString().split("").reduce((sum, item)=>sum+Number(item), 0);
    return x%num?false:true;
}