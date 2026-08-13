// getOrderAnalytics(orders) নামে function বানাবে।

// Function থেকে শুধু completed + paid orders নিয়ে নিচের information বের করতে হবে:

// {
//   totalOrders: 2,
//   totalRevenue: 102400,
//   totalItems: 4
// }

function getOrderAnalytics(orders){
    let confirmedOrder = orders.filter((order)=> order.payment.toLowerCase() === "paid" && order.status.toLowerCase() === "completed")
    
    let totalOrders = 0;
    
    let totalItems = 0;
   let items = []
   
  
    // console.log(confirmedOrder)
   
    confirmedOrder.forEach((order) => {
      console.log(order);
        let totalQuantity = order.items.reduce((sum , item)=> sum + item.quantity ,0)
        totalItems = totalQuantity + totalItems
        totalOrders += 1
        items.push(order.items)
        // console.log(confirmedOrder[idx].items);

    });

    
    let total = items.reduce((grandTotal, currentItem)=>{
        let orderTotal = currentItem.reduce((sum , item)=>{
          return sum + item.price * item.quantity
        },0)
        // console.log(grandTotal);
        return orderTotal + grandTotal
    },0)
    
    
    //let totalRevenue = confirmedOrder.items.reduce((sum , order)=> order.price + sum, 0);

     return{
        totalOrders,
        totalItems,
        total
    

     }

}

console.log(getOrderAnalytics([
  {
    id: 101,
    customer: "Rahim",
    status: "completed",
    payment: "paid",
    items: [
      { name: "Laptop", price: 80000, quantity: 1 },
      { name: "Mouse", price: 1200, quantity: 2 }
    ]
  },

  {
    id: 102,
    customer: "Karim",
    status: "cancelled",
    payment: "refunded",
    items: [
      { name: "Keyboard", price: 2500, quantity: 1 }
    ]
  },

  {
    id: 103,
    customer: "Nadia",
    status: "completed",
    payment: "paid",
    items: [
      { name: "Monitor", price: 20000, quantity: 2 },
      { name: "Mouse", price: 1200, quantity: 1 }
    ]
  },

  {
    id: 104,
    customer: "Sakib",
    status: "pending",
    payment: "unpaid",
    items: [
      { name: "Laptop", price: 80000, quantity: 1 }
    ]
  }
]));