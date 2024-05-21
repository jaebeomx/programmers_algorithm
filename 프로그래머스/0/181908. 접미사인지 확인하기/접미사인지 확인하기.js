function solution(my_string, is_suffix) {
    let bool= my_string.endsWith(is_suffix);
    return bool?1:0;
}