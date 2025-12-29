// Immediately Invoked Function Expressions (IIFE)

// Names IIFE
// (function chai() {
//     console.log(`DB Connected`);    
// }) ()

(function chai() {
    console.log(`DB Connected`);    
}) ();
// Remember to give semi colon after one iife if you want more than 1 iffe in your code to run


// UnNamed IIFE
( (name)=> {
    console.log(`DB Two Connected ${name}`);
    
})("Ak")


// Named IIFE is an IFFE which is not an arrow function i.e. it has been declared with a name

// Unnamed IIFE is an IIFE which is an arrow Function i.e. it has been declared without a name