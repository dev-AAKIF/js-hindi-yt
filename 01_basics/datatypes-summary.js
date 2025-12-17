// Datatypes are mainly divided into 2 segments
// Primitive and Reference Type( unofficially Non-Primitive)


//Primitive Datatypes

// 7 Types of Primitive Datatypes : String, Number, Boolean, Null, Undefined, Symbol and BigInt

const store = "100'" // String
const scoreValue = 100.3 //Number

const isLoggedIn = true //boolean
const outsideTemp = null //null
let userEmail; // undefined
const bigNumber = 3456543576654356754n // BigInt

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol

// console.log(id === anotherId);


//Reference Type (Datatypes) (Non Primitive)

// Array, Objects, Functions

const heroes = ["Salman", "Shahrukh", "Obaid", "Amir"];

let myObj = {
    name: "Akif",
    age: 24,
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof scoreValue);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++=

// Stack (Primitive), Heap (Non-Primitive)

// Stack is used for Primitive Datatypes and Heap is used for Non-Primitive DataTypes

// In Stack Memory, The Variable which we declare,we get a copy of that, and whatever changes we do to the updated variable, the changes are done to the updated memoried variable and not the original value

// In Heap Memory, the Variable or object which we declare, we get the reference of the original value and whatever changes we do to the reference, the original value gets changed and it gets updated with that change

let myYoutubeName = "akifansaridotcom"

let updatedName = myYoutubeName
updatedName = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(updatedName);

let userOne = {
    email: "user@google.com",
    upiId: "user@hdfcbank"
}

let userTwo = userOne

userTwo.email = "akif@google.com"
console.log(userOne.email);
console.log(userTwo.email);

