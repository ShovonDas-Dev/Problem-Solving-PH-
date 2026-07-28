// Concepts Used: Arrays · Loops · includes()
// Scenario: Write a function removeDuplicates(arr) that returns a new array with only
// unique values, preserving order.
// ● If the input is not an array, return "Invalid".
// Expected Output:
// removeDuplicates([1,2,2,3,4,4,5]) → [1, 2, 3, 4, 5]
// Hints:
// 1. Create an empty result array
// 2. For each item, only push it if the result array doesn't already includes() it
// Write your code here:

function removeDuplicates (arr){
    let numbers = [];
    for(let i=0; i<arr.length; i++){
        if(!numbers.includes(arr[i] )){
            numbers.push(arr[i])
        }
    }
    return numbers
    

}
console.log(removeDuplicates([1,2,2,3,4,4,5]))