// Task 13-3A: Product of Digits
// Problem Statement:
// Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.

    function productDigits (product) {
        let ans = 1
        let number = product.toString().split("")
        for (let num= 0; num < number.length; num++){
             ans =  ans * number[num]
        }
        return ans
    }

    console.log(productDigits(258))
        