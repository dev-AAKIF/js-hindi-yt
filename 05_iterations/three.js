// for of

// ["", "", ""]  // => array containing multiple stuffs(objects)
// [{}, {}, {}]  // => array of object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each Char is ${greet}`);    
}


// for (const greet of greetings) {
//     if (greet === " ") {
//         continue
//     }
//     console.log(`Each Char is ${greet}`);    
// }

