function solution(n){
    return n.toString(2).split("").filter(item=>item=="1").length;
}