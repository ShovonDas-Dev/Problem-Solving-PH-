// Task 9: splitFirstRest(arr) — Rest Syntax 
// Return { first, rest } where first is the first element and rest is an array of all remaining elements.
// Input:  [10, 20, 30, 40]
// Output: { first: 10, rest: [20, 30, 40] }



function splitFirstRest(arr){

    const [first , ...rest] = arr 
    return {
        first,
        rest 
    }
    


}
console.log(splitFirstRest([10, 20, 30, 40]))

// Solved