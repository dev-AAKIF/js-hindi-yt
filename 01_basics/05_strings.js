const name = "Akif"
const repoCount = 50

// console.log(name + repoCount + " value")

// console.log(`Hello my nams is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Akif-com-cac")

console.log(gameName[5]); // used to find a character at the position defined in the [] barckets, we can`t use [] because it doesnt supports [-1] i.e. negative values, thats why it is a better approach to use string.at(5)/ string.at(-2) for accessing last elements using negative indexing


// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('A'));
// console.log(gameName.anchor());  // depreciated

const newString = gameName.substring(0, 6)
// console.log(newString); // => 0,1,2,3,4,5 => `Akif c`, we can`t use negative values in `.substring()`

const anotherString = gameName.slice(-7, 6)
// console.log(anotherString)// =>  `kif c` , we can use negative values in `.slice()`

const newStringOne = "    Akif    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://akif.com/akif%20ansari"
console.log(url.replace("%20", "-"))

console.log(url.includes("akif"));

console.log(gameName.split("-"));
