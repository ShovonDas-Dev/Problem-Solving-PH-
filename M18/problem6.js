// Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update 
// Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
// Input:  
// promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
// Output: 
// { name: "Rafi", title: "Senior Dev" }
// (original object still has title: "Junior Dev")


function promoteEmployee(employee, newTitle){
    let copyObj = {...employee}
    copyObj.title = newTitle
    console.log(employee)
    return copyObj
    

}
console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"))

// Solved