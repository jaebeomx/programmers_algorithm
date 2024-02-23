function solution(my_string, letter) {
    let my_array= my_string.split("");
    let new_array= my_array.filter((item)=>{
        return item!=letter;
    });
    return new_array.join("");
}