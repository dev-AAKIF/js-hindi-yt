// if statement
const isUserLoggedIn = true 
const temperature = 41

// if else

// if (temperature ===40) {
//     console.log("Code Executed");   
// } else {
//     console.log("Temperature is less than 41");
    
// }

// <,>, <=, >=, !=, ==, !==, ===,!===

const score = 200

// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power is ${power}`);
    
// }
//     console.log(`User Power is ${power}`);

// const balance = 1000

// if (balance > 500) console.log("Test"); //  Implicit Scope

// if (balance > 500) console.log("Test"), console.log("Test2"); //not to write a code like this

// if ( balance < 500 ) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if ( balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User Logged In");
    
}