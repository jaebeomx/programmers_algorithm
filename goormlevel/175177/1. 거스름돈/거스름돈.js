const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    for await (const line of rl) {
        let N = parseInt(line.trim(), 10);
        let coins = [40, 20, 10, 5, 1];
        let count = 0;

        for (let coin of coins) {
            count += Math.floor(N / coin);
            N %= coin;
        }

        console.log(count);
        rl.close();
    }

    process.exit();
})();