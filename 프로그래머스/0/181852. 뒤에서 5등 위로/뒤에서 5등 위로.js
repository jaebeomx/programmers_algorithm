function solution(num_list) {
    let arr= num_list.sort((a,b)=>a-b).slice(5);
    return arr.sort((a,b)=>a-b);
}