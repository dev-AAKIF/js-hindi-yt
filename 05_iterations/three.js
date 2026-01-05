// for of

// ["", "", ""]  // => array containing multiple stuffs(objects)
// [{}, {}, {}]  // => array of object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);    
}

//----------------------------------------------------------------------

// for greeting, removing space using continue

// for (const greet of greetings) {
//     if (greet === " ") {
//         continue
//     }
//     console.log(`Each Char is ${greet}`);    
// }


//----------------------------------------------------------------------

// greetinf with breaking after space, it stops the code after breaks(space)

// for (const greet of greetings) {
//     if (greet === " ") {
//         break
//     }
//     console.log(`Each Char is ${greet}`);    
// }

// -----------------------------End------------------------------

//Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("KSA", "Kingdom of Saudi Arabia")
map.set("FR", "France")
map.set("RS", "Russia")
map.set("IN", "India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ":-", value); 
}

// for (const key in map) {
//     console.log(key);
    
// }

// const myObj = {
//     "Game1" : "NFS",
//     "Game2" : "GTA",
//     "Game3": "Asphalt"
// }
const myObj = {
    Game1 : "NFS",
    Game2 : "GTA",
    Game3: "Asphalt"
}

// for (const [key, value] of myObj) {
//     // console.log(key, ":-", value);
// }

