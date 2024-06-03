function solution(n) {
    let count = 0;
    let m = 1;
    
    while (m * (m + 1) / 2 <= n) {
        let numerator = 2 * n - m * (m - 1);
        if (numerator % (2 * m) == 0) {
            count += 1;
        }
        m += 1;
    }
    
    return count;
}