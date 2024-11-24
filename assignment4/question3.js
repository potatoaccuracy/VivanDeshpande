const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let avg = 0;
for (price of amdPrices){
    avg += price / amdPrices.length;
}

let countAboveAvg = 0;
for (price of amdPrices){
    if (price > avg){
        countAboveAvg++;
    }
}

console.log("Number of days AMD was above the 7-day SMA is: " + countAboveAvg);