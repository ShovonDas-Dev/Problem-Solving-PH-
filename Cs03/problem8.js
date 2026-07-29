// Concepts Used: String · Split · Loop · Object
// Scenario: MailBox Pro, an email management system, wants to analyze a sentence
// containing email addresses. Write a function analyzeEmailDomains(text) that returns
// an object containing the total number of email addresses and the longest email
// domain (the part after @).
// ● "Invalid" if the input is not a string.
// Expected Output:
// ● analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com
// info@programminghero.com")
// → { emailCount: 3, longestDomain: "programminghero.com" }
// ● analyzeEmailDomains("Hello everyone!")
// → { emailCount: 0, longestDomain: "" }
// Hints:
// 1. Use split(" ") to separate the sentence into words.
// 2. Check whether a word contains "@" using includes("@"), then split("@") to extract the
// domain and compare its length.


function analyzeEmailDomains(emails){
    let email = emails.split(" ")
    let domainName = [];
    let emailCount = 0;
    let longestDomain = ""
    
    for(let i=0; i<email.length; i++){
        emailCount = emailCount + i
        let arr = email[i].split("@")
        if(arr){
           domainName.push(arr[1])
        }
        if(longestDomain.length < domainName[i].length){
            longestDomain = domainName[i]
            
        }
        

    }
    return longestDomain
    
    console.log(longestDomain.length)
    // let arr = email[1].split("@")
    // console.log(arr)
}
console.log(analyzeEmailDomains("Contactsupport@gmail.com admin@yahoo.com info@programminghero.com"))


// onk kosto korar por at last Resolved 