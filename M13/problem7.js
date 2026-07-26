// Task 13-5B: Find the Shortest Word in a Sentence
// Matches lesson: 13-5 (String problems — split + loops)
// Problem Statement:
// Write a function findShortestWord that takes a sentence and returns the shortest word in it.


function findShortestWord(str){
    let strToArr = str.split(" ")
    let shortestWord = strToArr[0];
    for(let i=1; i<strToArr.length; i++){
        if(shortestWord.length > strToArr[i].length){
            shortestWord= strToArr[i]
        }
        
    }
    return shortestWord;

}
console.log(findShortestWord("this is a mango"))