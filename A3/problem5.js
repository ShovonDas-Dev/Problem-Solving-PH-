/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
     
  [true , true , false]
    let isMissing = students.some((student)=> {
        // console.log(true , true , true );
        return !student.name || !student.score || typeof(student.score) !== "number" 
    })
    
    // console.log(isMissing);
    if(isMissing){
        return "Invalid";     
    }

    const qualified = students.filter(student => student.score >= 70);
    // console.log(qualified)
    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names;
}

// Challenge
// Bug ঠিক করার পরে function এটাও handle করবে —
// Input Array না হলে "Invalid" 
// Empty Array হলে "Invalid" 
// কোনো Object-এ name বা score না থাকলে "Invalid" 
// score Number না হলে "Invalid" 


console.log(generateLeaderboard([{ name: "Rafi", score: 90 }, { name: "Sadia", score: 65 }, { name: "Karim", score: 85 }, { name: "Nafis", score: 75 }]))