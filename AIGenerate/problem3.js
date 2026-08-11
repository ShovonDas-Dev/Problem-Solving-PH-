// 🚀 Problem 3 — Admin Dashboard: User Management

// ধরো তুমি একটা Admin Dashboard বানাচ্ছো। Admin-এর কাছে সব user-এর data আছে।

// তোমাকে এমন একটি function বানাতে হবে:

// getActiveUsers(users)
// 🎯 Real Project Requirement

// Admin dashboard-এ সব registered user দেখানো যাবে না।

// শুধু সেই users দেখাতে হবে যারা:

// status === "active"
// role !== "admin"

// অর্থাৎ active customer/user, কিন্তু admin নয়।

function getActiveUsers(users){
    let activeUser = users.filter((user)=> user.role === "user" && user.status === "active")
    return activeUser
}
console.log(getActiveUsers([
  { id: 1, name: "Shovon", role: "user", status: "active" },
  { id: 2, name: "Rahim", role: "admin", status: "active" },
  { id: 3, name: "Karim", role: "user", status: "inactive" },
  { id: 4, name: "Nadia", role: "user", status: "active" },
  { id: 5, name: "Sakib", role: "admin", status: "inactive" }
]))