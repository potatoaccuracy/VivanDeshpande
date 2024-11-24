const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let avgClosingPrice = 0;
for (day of msftData){
	avgClosingPrice += day[3] / msftData.length;
}

console.log("Average closing price of MSFT is " + avgClosingPrice.toFixed(2));