// Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
// Input: [100, 250, 75] 
// Output: ["$100", "$250", "$75"]


function getFormattedPrices(prices){
 let newPrices = [...prices]
 let updatePrices = []
    newPrices.map((price)=>{
        updatePrices.push(`$${price}`)
    })
    return updatePrices
    

}
console.log(getFormattedPrices([100, 250, 75]))