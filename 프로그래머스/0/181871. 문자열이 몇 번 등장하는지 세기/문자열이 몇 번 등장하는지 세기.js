function solution(myString, pat) {
    let count= 0;
    while(myString.length){
        if(myString.startsWith(pat)){
            count+=1;
        }
        myString= myString.split("");
        myString.shift();
        myString= myString.join("");
    }
    return count;
}