// Task 13-6A: Find the Second Smallest Number
// Problem Statement:
// Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.


function findSecondSmalllest (arr){
    let smallest = Infinity
    let secondSmallest = Infinity

    for(let i=0; i<arr.length; i++){
        let num = arr[i]
        if(num < smallest){
            secondSmallest= smallest
            smallest = num
        }else if(num > smallest && num < secondSmallest){
            smallest = num
        }
    }
    return smallest
    

}
console.log(findSecondSmalllest([1,4,534,23,23]));


// very confusing 