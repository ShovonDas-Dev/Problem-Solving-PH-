// Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value 
// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
// Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
// Output: [{ name: "Rafi", points: 25 }]
//  (original array's object must still have points: 20)

function applyBonusPoints(users, bonus){
   
    let user = [...users]
    let withBonus = user[0].points + bonus
    user[0].points = withBonus
    
    // console.log(users[0].points)
    // console.log(user)
    return user
}
console.log(applyBonusPoints([{ name: "Rafi", points: 20 }], bonus = 5 ))