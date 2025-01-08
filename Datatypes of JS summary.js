
// primitive

// 7 types - string,number,boolean,null,undefined,symbol,BigInt


// const score = 100
// const scoreValue = 100.3


// const isLoggedIN = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id === anotherId);

// const bignumber = 236728732167327832n


// Reference (Non primitive)

// Array, object, Functions

// const heros = ["shaktiman","naagraj","doga"];

// console.log(heros);


// let myObj = {
//     name : "golu",
//     age : 18,
// }

//   const myFunction = function(){
//     console.log("hello world");
    
// }


// console.log(typeof outsideTemp);



// *******************************************************************************


// stack (primitive), Heap (Non-Primitive)

// let myYoutubename = "aditya shekhar"

// let anothername = myYoutubename
// anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userone = {
    email:"golu@gmail.com",
    upi: "user@ybl"
}

let userTwo = userone

userTwo.email = "ayush@gmail.com"

console.log(userone.email);
console.log(userTwo.email);




