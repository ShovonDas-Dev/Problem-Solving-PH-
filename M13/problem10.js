// Task 13-7A: Average of All Numbers
// Problem Statement:
// Write a function averageOfArray that takes an array of numbers and returns their average.


function averageOfArray(arr){
    let length = arr.length
     let sum = 0
    for(let x=0; x<arr.length; x++){
         sum = sum + arr[x] 
    }
    return average = sum/length
}
console.log(averageOfArray([12,13,14]));


// Easy