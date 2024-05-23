function solution(a, b, c) {
    let set= new Set();
    set.add(a);
    set.add(b);
    set.add(c);
    
    let size= set.size;
    console.log(size);
    if(size===3){
        return a+b+c;
    }else if(size===2){
        return ((a+b+c)*(a*a+b*b+c*c));
    }else if(size===1){
        return ((a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c))
    }
}