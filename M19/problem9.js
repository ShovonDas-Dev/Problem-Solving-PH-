// Task 9: isStrictMatch(input, target) — Truthy/Falsy and === 
// Return true only if input strictly equals target in both value and type, false otherwise.
// Input: isStrictMatch("18", 18) 
// Output: false
// Input: isStrictMatch(18, 18) 
// Output: true


function isStrictMatch(input , target){
    let isMatch = input === target ? true : false
    return isMatch
}
console.log(isStrictMatch(18, 18) )

//  Resolved