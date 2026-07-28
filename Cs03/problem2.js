// Concepts Used: Strings · Loops · Modulus
// Scenario: SnapText, a note-taking app, builds a quick preview of a caption by
// keeping only the words at even index positions (0, 2, 4...). Write a function
// filterEvenPositionWords(sentence) that returns the filtered sentence.
// Expected Output:
// filterEvenPositionWords('The quick brown fox jumps')
// → 'The brown jumps'

function filterEvenPositionWords(sentence){
    let words = sentence.split(" ")
    console.log(words);
    
    let evenSentence = []


    for(let i=0; i<words.length; i++){
      if(i%2 === 0){
        evenSentence.push(words[i])
      }  
    }
    return evenSentence.join(" ")
}
console.log(filterEvenPositionWords("The quick brown fox jumps"))

// Resolved 