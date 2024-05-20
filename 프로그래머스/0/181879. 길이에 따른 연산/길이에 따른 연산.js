function solution(num_list) {
    return num_list.length>=11?num_list.reduce((sum, item)=>sum+item, 0):num_list.reduce((res, item)=>res*item, 1);
}