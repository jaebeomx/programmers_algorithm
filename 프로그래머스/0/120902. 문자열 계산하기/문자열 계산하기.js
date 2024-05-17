function solution(my_string) {
    my_string= my_string.split(" ");
    let sum= Number(my_string[0]);
    
    for(let i=1; i<my_string.length; i++){
        if(my_string[i]=="+"){
            sum+=Number(my_string[i+1]);
        }else if(my_string[i]=="-"){
            sum-=Number(my_string[i+1]);
        }
    }
    return sum;
}