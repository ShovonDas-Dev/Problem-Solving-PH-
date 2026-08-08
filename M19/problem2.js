// Task 2: getAvailableProducts(products) — filter() 
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
// Input: 
// [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] 
// Output: 
// [{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]


function getAvailableProducts(products){
    // console.log(products.length)
    // let stockProduct = []

    return products.filter((product)=>{
        return product.stock > 0
        
    })

    // for(let i=0; i < products.length; i++){
        
    //     if(products[i].stock > 0){
    //         stockProduct.push(products[i])
    //     }

    // }
    // return stockProduct


}



console.log(getAvailableProducts(
    [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] 
));


// Solved