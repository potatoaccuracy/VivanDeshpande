const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let avg = 0;
for (price of amdPrices){
    avg += price / amdPrices.length;
}

console.log("The 7-day SMA of AMD is " + avg.toFixed(2));