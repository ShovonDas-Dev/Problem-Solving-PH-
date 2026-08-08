    //     Task 4: getTotalStockValue(products) — reduce() 
    // Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
    // Input:
    //  [{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
    // Output: 400


    function getTotalStockValue(products){
        let totalPrice = products.reduce((acc , product)=>{
            console.log(acc ,product)

            let totoal = (product.price * product.stock)
            let totalPrice = acc + totoal
            return totalPrice

        },0)
        return totalPrice
    }
    console.log(getTotalStockValue( [{ price: 50, stock: 4 }, { price: 20, stock: 10 }] ));


    // Resolved