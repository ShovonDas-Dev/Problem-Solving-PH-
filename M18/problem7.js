// Task 7: sumAllPrices(prices) — for...of 
// Given an array of numbers, return their sum using for...of.
// Input:  [100, 250, 75]
// Output: 425


function sumAllPrices(prices){
    let total = 0;
    for(let price of prices){
        total += price
    }
    return total
}
console.log(sumAllPrices([100, 250, 75]))

