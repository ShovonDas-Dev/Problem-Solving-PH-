//  আমরা Problem 6 — Checkout Final Amount থেকেই continue করছি।

// তোমার কাজ হলো calculateCheckout(cart, customer) function তৈরি করা।

// 🎯 তোমার Task

// এই function-এর মধ্যে:

// stock === 0 product বাদ দেবে
// Available productগুলোর price × quantity করে subtotal বের করবে
// Customer-এর membership অনুযায়ী discount বের করবে:
// silver → 5%
// gold → 10%
// none → 0%
// Subtotal 50000 বা তার বেশি হলে shipping 0, না হলে 100
// শেষে finalAmount বের করবে:

// subtotal - discount + shipping 
// {
//   subtotal: 102400,
//   discount: 10240,
//   shipping: 0,
//   finalAmount: 92160
// }

function calculateCheckout(cart, customer){
    let cartProduct = cart.filter((product)=> product.stock !== 0)
    let subtotal = 0
    let shipping = 0
    cartProduct.forEach(product => {
        subtotal = product.price * product.quantity + subtotal
    });
    if(subtotal < 50000 ){
        shipping = 100
    }

    let discount = customer.membership === "gold" ? subtotal * 10 /100 : customer.membership === "silver" ? subtotal * 5 /100  : 0


    let finalAmount = subtotal - discount + shipping
    return {
        subtotal,
        discount,
        shipping,
        finalAmount
    }
}

const cart = [
  {
    name: "Laptop",
    price: 80000,
    quantity: 1,
    stock: 5
  },
  {
    name: "Mouse",
    price: 1200,
    quantity: 2,
    stock: 10
  },
  {
    name: "Keyboard",
    price: 2500,
    quantity: 1,
    stock: 0
  },
  {
    name: "Monitor",
    price: 20000,
    quantity: 1,
    stock: 3
  }
];

const customer = {
  name: "Shovon",
  membership: "gold"
};

console.log(calculateCheckout(cart , customer ));