// Task 13-3B: Odd Numbers Up To N
// Problem Statement:
// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).
 

function getOddNumbers (N){
   let oddNumber = []
    for(let n=1; n <= N; n++ ){
        if(n % 2 !== 0){
            oddNumber.push(n)
        }
    }
    return oddNumber
    
}

console.log(getOddNumbers(10))
console.log(getOddNumbers(15))
console.log(getOddNumbers(18))
console.log(getOddNumbers(50))