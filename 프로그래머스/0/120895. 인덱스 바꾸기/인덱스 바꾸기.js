function solution(my_string, num1, num2) {
    let arr= my_string.split("");
    let str1= my_string[num1];
    let str2= my_string[num2];

    arr.splice(num1,1,str2);
    arr.splice(num2,1,str1);
    
    return arr.join("");
}