function solution(a, b) {
    let first= Number(a+""+b);
    let second= Number(b+""+a);
    
    if(first>second){
        return first;
    }else if(first<second){
        return second;
    }else{
        return first;
    }
}