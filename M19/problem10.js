// Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style) 
// Given an array of orders { product, unitsSold }, 
// return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

// Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
// Output: "Pen"


// function getTopSellingProduct(orders){
     
//     let product = orders.map((product) => product.product)
//     let matchProducts = [... new Set(product)]  //o return kore pen ar bag 2 ta jinis  // pen bag 
//     // sum
//     matchProducts.forEach((products) =>{
//         let topSelling =  orders.filter((p)=> p.product === products)
//         console.log(topSelling); 
//     })



    

// }
// console.log(getTopSellingProduct(
//     [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }]
// ))






function getTopSellingProduct(orders) {
  const products = [...new Set(orders.map(order => order.product))]; // [ 'Pen', 'Bag' ]
    // console.log(products)// [ 'Pen', 'Bag' ]
  let topProduct = "";
  let maxUnits = 0;

  products.forEach(product => {
    const matchedOrders = orders.filter(order => order.product === product );
//     // console.log(matchedOrders)
// [
//   { product: 'Pen', unitsSold: 30 },
//   { product: 'Pen', unitsSold: 25 }
// ]
// [ { product: 'Bag', unitsSold: 12 } ]

    const totalUnits = matchedOrders.reduce((total, order) => {
        //console.log(total , order);
        return total + order.unitsSold
    }, 0);
    console.log(totalUnits)
    // console.log(totalUnits); // 55 ,12

    if (totalUnits > maxUnits) {
      maxUnits = totalUnits;
      topProduct = product;
    }
    console.log(product)    
  });

 
}

const orders = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 }
];

console.log(getTopSellingProduct(orders));