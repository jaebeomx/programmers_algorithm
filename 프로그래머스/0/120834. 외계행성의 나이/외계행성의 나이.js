function solution(age) {
    let chr= "abcdefghij";
    let new_age= [];
    chr= chr.split("");
    while(age){
        new_age.unshift(chr[age%10]);
        age= Math.floor(age/10);
    }
    return new_age.join("");
}