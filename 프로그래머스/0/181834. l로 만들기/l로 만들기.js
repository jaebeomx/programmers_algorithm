function solution(myString) {
    return myString.split("").map((item)=>{
        return item<"l"?"l":item;
    }).join("");
}