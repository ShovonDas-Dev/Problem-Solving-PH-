function regexVar(sentence) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */ 
         let re = undefined;
         let vowel = 'aeiou'
         let fstVowel = ''
         let lastCret = sentence.length-1
         for(let cret of sentence){
            // console.log(cret)
            if(vowel.includes(cret)){
                 fstVowel +=  cret  
            } 
            if(sentence[lastCret] === fstVowel){
                return true
            }else{
               return false
            }
         }
        //  console.log(sentence.length-1)
        //  console.log(fstVowel[0])

    
    /*
     * Do not remove the return statement
     */
    return re;
}
console.log(regexVar("abcdo"))
