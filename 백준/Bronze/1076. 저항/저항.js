let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let color = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
];
let values = new Map(
	color.map((el, idx) => [el, [String(idx), Number("1" + "0".repeat(idx))]])
);

console.log(
	Number(values.get(input[0])[0] + values.get(input[1])[0]) *
		values.get(input[2])[1]
);