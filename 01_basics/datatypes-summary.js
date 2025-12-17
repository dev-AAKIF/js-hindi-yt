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

console.log(id === anotherId);


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

myFunction();