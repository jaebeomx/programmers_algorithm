function solution(num_str) {
    return num_str.split("").reduce((sum,item)=>sum+Number(item),0);
}