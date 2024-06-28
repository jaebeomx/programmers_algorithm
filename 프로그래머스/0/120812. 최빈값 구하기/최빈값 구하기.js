function solution(array) {
    // 배열의 길이가 1인 경우, 그 원소가 최빈값입니다.
    if (array.length === 1) {
        return array[0];
    }
    
    const map = new Map();
    
    // 배열의 각 원소의 빈도수를 맵에 기록합니다.
    for (const num of array) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    let maxFrequency = 0;
    let mode = -1;
    let isMultiple = false;
    
    // 최빈값을 찾고, 여러 개의 최빈값이 있는지 확인합니다.
    for (const [num, count] of map.entries()) {
        if (count > maxFrequency) {
            maxFrequency = count;
            mode = num;
            isMultiple = false;
        } else if (count === maxFrequency) {
            isMultiple = true;
        }
    }
    
    return isMultiple ? -1 : mode;
}