// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
// Input: 
// products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
// Output: 144
function getDiscountedTotalForCategory(products , category){
    let filteredItem = products.filter((product)=>product.category == category)
    // console.log(filteredItem)
    let totalPrice = filteredItem.reduce((acc , p)=>{

        // console.log(acc , p.price)
        let itemPrice =  p.price + acc
        return itemPrice
    },0)
    
    let afterDiscount =totalPrice - (totalPrice*10)/100 
    return afterDiscount
    
   

}
console.log(getDiscountedTotalForCategory(

    [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
))

//  Resolved