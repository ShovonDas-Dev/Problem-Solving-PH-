// Concepts Used: Strings · Reversal
// Scenario: Write a function isPalindrome(str) that returns true if the string reads the
// same forwards and backwards (e.g. 'madam').
// ● If the input is not a string, return "Invalid".
// Expected Output:
// isPalindrome('madam') → true
// isPalindrome('hero') → false
// Hints:
// 1. Reverse the string using any method from Session 2
// 2. Compare the reversed version to the original with ===
// Write your code here:



function isPalindrome (word){
    let reverse = word.split("").reverse().join("").toLowerCase()
    if(reverse === word.toLowerCase()){
        return true
    }else{
        return false
    }

}
console.log(isPalindrome("Hero"))

// Reso;ved