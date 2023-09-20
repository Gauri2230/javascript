/*+++++++++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++++++++
1. Stack(Primitive)
2. Heap(Non Primitive)

*/
let myName = "Gauri"
let newName = myName
newName = "Neha"
console.log(newName);
console.log(myName);
let userOne = {
    email : "user@123.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "nnn@123.com"
console.log(userOne);
console.log(userTwo);