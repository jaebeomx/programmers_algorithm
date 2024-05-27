function solution(myString) {
    return myString.split("x").filter(item=>item.length>=1).sort();
}