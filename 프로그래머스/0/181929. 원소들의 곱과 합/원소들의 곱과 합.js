function solution(num_list) {
    let sum= num_list.reduce((sum,item)=>sum+item, 0);
    let mul= num_list.reduce((mul,item)=>mul*item, 1);
    return mul<Math.pow(sum,2)?1:0;
}