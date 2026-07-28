// Concepts Used: Functions · Loops · Objects
// Scenario: FitTrack, a fitness app, logs a user's daily step counts for the week in an
// array. Write a function weeklyStepsSummary(stepsArray) that returns an object {
// totalSteps, goalReached }, where goalReached is true once totalSteps reaches
// 50000.
// ● If stepsArray is not an array, return "Invalid".
// ● If any value inside the array is not a number, return "Invalid".
// Expected Output:
// weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000])
// → { totalSteps: 50200, goalReached: true }



function weeklyStepsSummary(steps){
  let  totalSteps = 0;
  let  goalReached = false;
  for(let i=0; i<steps.length; i++){
    if(typeof (steps[i]) == "number"){
        totalSteps += steps[i]
        if(totalSteps >= 50000){
            goalReached = true;
        }
    }
  }
  return {
    totalSteps,
    goalReached
  }
}

console.log(weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]));
// Resolved