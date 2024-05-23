function solution(n_str) {
    n_str= n_str.split("");
    while(1){
        if(n_str[0]=="0"){
            n_str.shift()
        }else{
            break;
        }
    }
    return n_str.join("");
}