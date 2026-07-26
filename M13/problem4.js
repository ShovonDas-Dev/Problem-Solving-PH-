// Task 13-4A: Count Vowels
// Problem Statement:
// Write a function countVowels that takes a string and returns how many vowels it contains. Assume the string only contains lowercase letters, no spaces.
 
function countVowels (contain){
    let Vowel = "aeiou";
    let count = 0;
    for(let x=0; x < contain.length; x++){
        if(Vowel.includes(contain[x])){
            count++
        }
    }
    return count 

}
console.log(countVowels("iloveshovon"))