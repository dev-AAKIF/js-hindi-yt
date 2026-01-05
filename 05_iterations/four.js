const myObject = {
    js : "Javascript",
    cpp : "C++",
    ts : "Typescript",
    rb : "Ruby",
    swift : "Swift by Apple"
}

// for (const key in myObject) {
//   console.log(key);
    
// } // only getting the key`s value and not the value


// -----------------------------------------------------------


// for (const key in myObject) {
//     console.log(myObject[key]);
// } // only getting the values of key and not the key

// --------------------------------

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]} `);
    
} //  it is printing both, keys as well as its values

const programming = ["js", "cpp", "rb", "py", "java"]

for (const key in programming) {
    // console.log(programming[key]); 
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("KSA", "Kingdom of Saudi Arabia")
// map.set("FR", "France")
// map.set("RS", "Russia")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key);
// }

// because map is not iterable

