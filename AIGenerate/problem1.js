// ধরো তুমি একটি E-commerce website-এর product management system বানাচ্ছো।

// তোমার কাছে কিছু product-এর data আছে। তোমাকে এমন একটি function বানাতে হবে, যেটা শুধু বর্তমানে stock-এ থাকা productগুলো return করবে।

// 📌 Requirements

// getAvailableProducts(products) নামে একটি function বানাবে।

// প্রতিটি product-এর মধ্যে থাকবে:

// name
// price
// stock

// তোমার function:

// যেসব product-এর stock 0-এর বেশি, শুধু সেগুলো রাখবে।
// stock 0 হলে productটি return করবে না।
// Original products array পরিবর্তন করা যাবে না।
// Function একটি নতুন array return করবে।

function getAvailableProducts(products){
    let copyArray = [...products]
    let stockProduct = copyArray.filter((p)=> p.stock >0)
    // console.log(copyArray);
    // copyArray.map((p)=>{
    //     if(p.stock > 0){
    //         stockProduct.push(p)
    //     }
    // })
    return stockProduct

}
console.log(getAvailableProducts([
  { name: "Laptop", price: 80000, stock: 5 },
  { name: "Mouse", price: 1200, stock: 0 },
  { name: "Keyboard", price: 2500, stock: 8 },
  { name: "Monitor", price: 20000, stock: 0 }
]));