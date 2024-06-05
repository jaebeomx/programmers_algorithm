function solution(code) {
    let mode= 0;
    let ret= "";
    
    for(let idx=0; idx<code.length; idx++){
        if(mode==0){
            if(idx%2==0 && code[idx]!="1"){
                ret+=code[idx];
            }else if(code[idx]=="1"){
                mode= 1;
            }
        }else if(mode==1){
            if(idx%2==1 && code[idx]!="1"){
                ret+=code[idx];
            }else if(code[idx]=="1"){
                mode= 0;
            }
        }
    }
    return ret.length?ret:"EMPTY";
}