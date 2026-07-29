// Concepts Used: Objects · Functions · Conditionals
// Scenario: Given a single student object with name and three subject marks (bangla,
// english, math), write a function generateReportCard(student) that returns a NEW
// object containing the student's name, total, average, and grade (A+ for 90+, A for 80+,
// B for 70+, F below 70).
// ● Return "Invalid" if:
// ○ student is not an object
// ○ bangla is not a number
// ○ english is not a number


const student = {
  name: "Rahim",
  bangla: 40,
  english: 50,
  math: 100
};

function generateReportCard(student){
    console.log();
    let subKey = Object.keys(student).filter(key => key !== "name")
    let name = ''
    let total = 0
    let average = 0
    let grade = []

    if(typeof(student) === "object"){
        for(let i=0; i<subKey.length; i++){
            let keys= subKey[i]
            total = total + student[keys]
             average = total / subKey.length

             if(student[keys] >= 80 ){
                grade.push(subKey[i] +": A+") 
             }else if(student[keys] >= 70){
                grade.push(subKey[i] +": A") 
             }
             else{
                grade.push(subKey[i] +": Need batter preparation")
             }
           
        } 
        return {
            total,
            average,
            grade
        }
    }else{
        console.log("Invalid")
    }
}


console.log(generateReportCard(student))


// Resolve