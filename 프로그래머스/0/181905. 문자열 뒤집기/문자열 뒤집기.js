function solution(my_string, s, e) {
    my_string= my_string.split("");
    let reverseStr= my_string.slice(s,e+1).reverse();
    my_string.splice(s,e-s+1,...reverseStr);
    
    return my_string.join("");
}