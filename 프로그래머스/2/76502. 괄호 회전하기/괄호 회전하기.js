function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    let validCount = 0;
    const n = s.length;
    
    for (let i = 0; i < n; i++) {
        const rotatedString = s.slice(i) + s.slice(0, i);
        if (isValid(rotatedString)) {
            validCount++;
        }
    }
    
    return validCount;
}