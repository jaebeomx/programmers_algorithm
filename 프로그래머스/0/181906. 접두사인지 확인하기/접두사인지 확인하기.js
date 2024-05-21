function solution(my_string, is_prefix) {
    let bool= my_string.startsWith(is_prefix);
    return bool?1:0;
}