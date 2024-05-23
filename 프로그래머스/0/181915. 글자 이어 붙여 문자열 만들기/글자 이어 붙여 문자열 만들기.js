function solution(my_string, index_list) {
    let answer= "";
    my_string= my_string.split("");
    let arr= index_list.map((item)=>my_string[item]);
    
    return arr.join("");
}