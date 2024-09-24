const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	let time1 = new Date(`2021-01-01 ${input[0]}`);
	let time2 = new Date(`2021-01-01 ${input[1]}`);

	if (time1 > time2) time2 = new Date(`2021-01-02 ${input[1]}`);

	let caculate = time2 - time1;

	let h = Math.floor((caculate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let m = Math.floor((caculate % (1000 * 60 * 60)) / (1000 * 60));
	let s = Math.floor((caculate % (1000 * 60)) / 1000);

	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	console.log(`${h}:${m}:${s}`);

	process.exit();
});