// 🟢 Problem 7 — Shopping Cart Stock Validation

// তুমি একটি E-commerce website-এর Shopping Cart Page বানাচ্ছো।

// User cart-এ কিছু product রেখেছে। কিন্তু checkout করার আগে দেখতে হবে:

// Product এখনো available কিনা
// User যত quantity চেয়েছে, stock-এ তত quantity আছে কিনা
// Stock কম হলে কত quantity available আছে সেটা দেখাতে হবে
// Stock একদম 0 হলে product unavailable

function validateCart(cart, products) {
    let stockDetails = cart.map((c, idx) => {

        let product = products.find((p)=> p.id === c.id)
        if(product.stock === 0){
            return{
                id: c.id,
                name: c.name,
                requestedQuantity: c.quantity,
                availableQuantity: product.stock,
                 status: "Out of Stock"
            }
        }else if(product.stock > 0 && product.stock < c.quantity){
            return{
                id: c.id,
                name: c.name,
                requestedQuantity: c.quantity,
                availableQuantity: product.stock,
                 status: "Limited Stock"
            }
        }else{
            return{
                id: c.id,
                name: c.name,
                requestedQuantity: c.quantity,
                availableQuantity: product.stock,
                 status: "Available"
            }
        }

        
    })
    return stockDetails
}

const cart = [
    {
        id: 1,
        name: "Laptop",
        price: 80000,
        quantity: 1,
    },
    {
        id: 2,
        name: "Mouse",
        price: 1200,
        quantity: 3,
    },
    {
        id: 3,
        name: "Keyboard",
        price: 2500,
        quantity: 2,
    },
    {
        id: 4,
        name: "Monitor",
        price: 20000,
        quantity: 1,
    },
];
const products = [
    {
        id: 1,
        name: "Laptop",
        stock: 5,
    },
    {
        id: 2,
        name: "Mouse",
        stock: 2,
    },
    {
        id: 3,
        name: "Keyboard",
        stock: 0,
    },
    {
        id: 4,
        name: "Monitor",
        stock: 1,
    },

];

console.log(validateCart(cart, products));
