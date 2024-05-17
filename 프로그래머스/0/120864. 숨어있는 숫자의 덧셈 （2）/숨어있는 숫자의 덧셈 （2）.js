function solution(my_string) {
    let regEx= /([0-9])+/g;
    if (!my_string.match(regEx)){
        return 0
    }
    return my_string.match(regEx).reduce((acc, curValue)=>acc+Number(curValue),0)
}