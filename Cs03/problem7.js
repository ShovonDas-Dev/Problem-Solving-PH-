// Concepts Used: Functions · Logical Operators
// Scenario: Write a function isLeapYear(year) that returns true if the year is a leap
// year. Rule: divisible by 4 AND (not divisible by 100 OR divisible by 400).
// ● Return "Invalid" if the input isn't a number.
// Expected Output:
// isLeapYear(2024) → true
// isLeapYear(1900) → false
// isLeapYear(2000) → true
// Hints:
// 1. Combine % checks with && and ||
// 2. Test all three given examples to confirm your logic


function isLeapYear(year){
    if(year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)){
        return true;
    }else{
        return false;
    }

}
console.log(isLeapYear(2025))


// Resolved