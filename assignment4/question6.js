// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

let msg = "The three lowest prices are ";
amdPrices.sort((a, b) => a - b);

for (let i = 0; i < 3; i++) {
    if (i < 2) {
        msg += amdPrices[i] + ", "; // Add a comma for the first two prices
    } else {
        msg += "and " + amdPrices[i]; // Add "and" before the last price
    }
}

console.log(msg);

// Did not figure out how to solve this one, had to use ChatGPT for help.