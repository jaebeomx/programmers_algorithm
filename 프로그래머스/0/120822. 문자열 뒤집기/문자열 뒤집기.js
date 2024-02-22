function solution(my_string) {
    let my_string_arr= my_string.split("");
    my_string_arr= my_string_arr.reverse();
    return my_string_arr.join("");
}