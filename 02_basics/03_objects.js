//singleton
//Object.create

//object literals

const mySymbol = Symbol("Key1")

const JsUser = {
    name: "Akif",
    "full name" : "Akif Ansari",
    [mySymbol]: "MyKey1",
    age: 18,
    location: "Mumbai",
    email: "dev.aakif@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser."full name") we cannot use this method of inverted commas "" for key defined using inverted commas"", we have to use Square brackets[] to console or call this key 
// console.log(JsUser["full name"]); // read above
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);// this states that it is a string and not a symbol so we need to change the way we define symbol

JsUser.email = "akif@google.com"
// console.log(JsUser);
// Object.freeze(JsUser) // this method object.freeze() freezes the specified object and does not let anyone make changes to the object
// console.log(JsUser);
JsUser.email = "akif@chatpgt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
    console.log(`Hello Js User, ${JsUser["full name"]}`);    
} 

console.log(JsUser.greeting); // it gives function return back and it does not executes a function but gives a function"s reference
console.log(JsUser.greetingTwo);


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

