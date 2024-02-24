function solution(numbers, direction) {
    let p;
    
    switch (direction){
        case "right":
            p= numbers.pop();
            numbers.unshift(p);
            break;
        
        case "left":
            p= numbers.shift();
            numbers.push(p);
            break;
        
        default: break;
    }
    return numbers;
}