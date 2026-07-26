// Task 13-5B: Find the Shortest Word in a Sentence
// Matches lesson: 13-5 (String problems — split + loops)
// Problem Statement:
// Write a function findShortestWord that takes a sentence and returns the shortest word in it.


function findShortestWord (str){
    let strToArr = str.split(" ")
    let newStr = []
    let sortWord = strToArr[0].length;
    // console.log(sortWord)
    // console.log(strToArr.length)
    
    for (let l=0; l<strToArr.length; l++){
        // console.log("str" + strToArr[l].length)
        if(sortWord > strToArr[l].length){
            newStr.push(strToArr[l])
        }
    }
    return newStr

}
findShortestWord("you are my favorite person")