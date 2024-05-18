function solution(absolutes, signs) {
    for(let i=0; i<signs.length; i++){
        if(signs[i]==true){
            signs[i]= 1;
        }else{
            signs[i]= -1;
        }
    }
    return absolutes.map((item, i)=>item*signs[i]).reduce((sum, item)=>sum+item, 0);
}