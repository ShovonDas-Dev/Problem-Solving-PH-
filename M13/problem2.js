// Task 13-2B: Reverse a Number
// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)

// without method
function reverseNumber (num) {
    let number = num.toString();
    let reverse = '';

    for (let n = number.length - 1; n >= 0; n--) {
        reverse += number[n];
    }

    return reverse
}


console.log(reverseNumber(12345))

// With Mathod//

function reverseNumberWithMethod (num){
   return number = num.toString().split("").reverse().join("")
}
console.log(reverseNumberWithMethod(12345))