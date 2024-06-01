function solution(n) {
    let bin= n.toString(2).split("").filter(item=>item=="1").length;
    let num= n+1;
    while(1){
        if(num.toString(2).split("").filter(item=>item=="1").length==bin){
            return num;
        }
        num+=1;
    }
}