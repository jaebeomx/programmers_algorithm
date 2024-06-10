const readline = require('readline');

(async () => {
    const rl = readline.createInterface({ input: process.stdin });
    let lineCount = 0;
    let people = [];
    
    for await (const line of rl) {
        if (lineCount === 0) {
            // 첫 줄은 사람 수이므로 무시
            lineCount++;
        } else if (lineCount === 1) {
            people = line.split(" ").map(Number);
            lineCount++;
            rl.close();
        }
    }
    
    const unmatched = new Set();
    
    for (let i = 0; i < people.length; i++) {
        const score = people[i];
        if (unmatched.has(-score)) {
            unmatched.delete(-score);
        } else {
            unmatched.add(score);
        }
    }
    
    // unmatched에 남은 두 숫자의 합을 계산
    const result = [...unmatched].reduce((a, b) => a + b, 0);
    console.log(result);
    
    process.exit();
})();
