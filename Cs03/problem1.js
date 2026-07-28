// Concepts Used: Arrays · Loops · Conditionals
// Scenario: Given an array of numbers, find both the largest AND smallest value using
// a single loop (no built-in Math.max/Math.min).
// ● If the input is not an array, return "Invalid".
// ● If any element of the array is not a number, return "Invalid".
// Expected Output:
// Numbers: [45, 12, 89, 3, 67]
// Largest: 89
// Smallest: 3


function  compareNumber (num){
 let smallest = num[0]
 let largest = num[0]

    for (let n=0; n<num.length; n++){
        if(typeof (num[n]) !== "number" ){
           return "this is not a number"
        }
       else if(largest < num[n] ){
           largest = num[n]
        }
        else if(smallest > num[n] ){
            smallest = num[n]
        }
       
    }
    return { smallest , largest }
    
}

console.log(compareNumber([12,13,14,15,16]))
// Resolved