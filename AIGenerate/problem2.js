// 🛒 Problem 2 — Shopping Cart Total

// ধরো তুমি একটি E-commerce Shopping Cart বানাচ্ছো।

// তোমার cart-এ কয়েকটি product আছে। প্রতিটি product-এর:

// name
// price
// quantity
// stock

// আছে।

// 🎯 তোমার কাজ

// getCartTotal(cart) নামে একটি function বানাও।

// Function-এর কাজ:

// শুধু যেসব product stock-এ আছে (stock > 0), সেগুলো হিসাব করবে।
// প্রতিটি product-এর মোট দাম বের করবে:
// price × quantity
// সব product-এর মোট দাম যোগ করে একটি total number return করবে।



function getCartTotal(cart) {
    let stockProducts = cart.filter((product)=> product.stock > 0)

    let totalProductPrice = stockProducts.reduce((sum , product)=> {
        return (product.price* product.quantity) + sum
    } , 0)
    return totalProductPrice
}
console.log(getCartTotal([
  { name: "Laptop", price: 80000, quantity: 1, stock: 5 },
  { name: "Mouse", price: 1200, quantity: 2, stock: 0 },
  { name: "Keyboard", price: 2500, quantity: 2, stock: 8 },
  { name: "Monitor", price: 20000, quantity: 1, stock: 3 }
]));