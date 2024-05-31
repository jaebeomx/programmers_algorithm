function solution(s){
    s= s.split("");
    let stack= 0;
    
    for(let i=0; i<s.length; i++){
        if(s[i]=="("){
            stack++;
        }else{
            stack--;
        }
        if(stack<0) return false;
    }
    
    return stack?false:true;
}