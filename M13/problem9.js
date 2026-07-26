// Task 13-6B: Count Multiples of Three
// Problem Statement:
// Write a function countMultiplesOfThree that takes an array of numbers and returns how many of them are divisible by 3.


function countMultiplesOfThree(arr){
    let count = 0
    for (let x=0; x<arr.length; x++){
        if(arr[x] % 3 === 0){
            count++
        }
    }
    return count
}
console.log(countMultiplesOfThree([3,5,3,6,9,2,4,12,56,76,42,15]))

// easy