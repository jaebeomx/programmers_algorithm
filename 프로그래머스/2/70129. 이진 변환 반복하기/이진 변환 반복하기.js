function solution(s) {
    let removeCount= 0;
    let convertCount= 0;
    let prevLength= s.length;
    let parseString= s.split("").filter(item=>item=="1").join("")
    
    while(1){
        parseString= parseString.split("").filter(item=>item=="1").join("");
        removeCount+=prevLength-parseString.length;
        parseString= parseString.length.toString(2);
        convertCount+=1;
        prevLength= parseString.length;
        if(parseString=="1") break;
    }
    
    return [convertCount, removeCount];
}