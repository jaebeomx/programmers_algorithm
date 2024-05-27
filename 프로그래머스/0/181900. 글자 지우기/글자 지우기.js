function solution(my_string, indices) {
    my_string= my_string.split("");
    let str= "";
    for(let i=0; i<my_string.length; i++){
        if(indices.includes(i)){
            continue;
        }else{
            str+=my_string[i];
        }
    }
    return str;
}