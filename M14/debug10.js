// 14-9B: Array Sum Skips a Number
// Problem Statement: Should return the sum of all numbers in the array.


function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { 
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10
// Resolved



// 14-9C: String Repeat
// Problem Statement: Should return a string repeated a given number of times.

function repeatString(str, times) {
  let result = [];
  
 
  for (let i = 0; i < times; i++) {
    result.push(str); // find the bug
  }
 
  return result.join("");
}
 
console.log(repeatString("ab", 3)); // Expected: "ababab"
// Resolved



// 14-9D: Object Property Update
// Problem Statement: Should update a person's age property and return the updated object.


function updateAge(person, newAge) {
  person.age = newAge; // find the bug
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }

// Resolved
