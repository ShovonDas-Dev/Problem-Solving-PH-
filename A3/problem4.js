// Problem 4 — Bonus Score Calculator
//  Function Name Must be: bonusScore
// একটি Programming Contest-এ প্রতিটি Participant-এর Score একটি Number Array আকারে দেওয়া আছে।

// Contest শেষে প্রত্যেক Participant-এর Score-এর সাথে ১০ Bonus Marks যোগ করা হবে। এরপর সব Updated Score যোগ করে Total Score Return করতে হবে।

// Input
// একটি Number Array, যেমনঃ 
// [80, 65, 90, 75]

// Output
// 350

// Explanation
// Updated Scores: (প্রত্যেকের সাথে 10 যোগ করে)
// [90, 75, 100, 85]
// Total: 
// 90 + 75 + 100 + 85 = 350


// Challenge
// Return "Invalid" যদি—
// Input Array না হয়।
// Array Empty হয়।
// Array-এর মধ্যে Number ছাড়া অন্য কোনো Data Type থাকে।

// টিপস: এই Problem সমাধান করতে map() এবং reduce() ব্যবহার করতে পারো। 


function bonusScore(scores){

    let updatedScore = [];
    let total = 0
    
    if(!Array.isArray(scores) || scores.length === 0){
        return "Invalid"
    }

    let isNumber = scores.some((score)=> typeof(score) !== "number")
    if(isNumber){return "Invalid"}
    // console.log(isNumber);
    
    scores.map((score)=>{
        updatedScore.push(score + 10)  
    })

    updatedScore.reduce((sum , score)=>{
        total = total + score
    },0)

    return total
}
console.log(bonusScore([80, "65", 90, 75]))