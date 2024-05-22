function solution(s) {
    if((Number.isInteger(+s)&& !s.includes("e"))&& (s.length==4 || s.length==6)){
        return true;
    }else{
        return false;
    }
}