function solution(s) {
    if(Number(s)){
        return Number(s);
    }
    
    let answer= "";
    let str= "";
    
    let arr= s.split("");
    
    
    while(arr.length>0){
        let index= arr.shift();
        if(Number.parseInt(index)){
            answer+=index;
        }else{
            str+=index;
        }
        if(str=="zero"){
            answer+="0";
            str="";
        }else if(str=="one"){
            answer+="1";
            str="";
        }else if(str=="two"){
            answer+="2";
            str="";
        }else if(str=="three"){
            answer+="3";
            str="";
        }else if(str=="four"){
            answer+="4";
            str="";
        }else if(str=="five"){
            answer+="5";
            str="";
        }else if(str=="six"){
            answer+="6";
            str="";
        }else if(str=="seven"){
            answer+="7";
            str="";
        }else if(str=="eight"){
            answer+="8";
            str="";
        }else if(str=="nine"){
            answer+="9";
            str="";
        }
    }
    return Number(answer);
}