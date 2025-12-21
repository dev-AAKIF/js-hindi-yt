const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","Flash", "Batman"]

marvel_heros.push(dc_heros) // it returns array inside array =>  [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // returns the element inside the array inside the array => Flash

const all_heros = marvel_heros.concat(dc_heros) // concat concatinates 2 array and not more than 2 two arrays so if we want to concate more than 2 arrays then it is not possible with the help of concat => [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // ... is spread operator (e.g. take a glass and drop it from a height then the glass pieces gets spreaded) spread operator does the same, it spreads all the elements from specified and returns a new array containing all the elements, (it can take more than 2 arrays and then concate it))
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4,5,6,], 7, [6, 7, [4,5,8]]]
const real_another_array = another_array.flat(Infinity) // .flat() method removes the levelling of an array and returns all the array into a single array without returning array of array of array
// console.log(real_another_array);

// console.log(Array.isArray("Akif")); // takes any argument and checks whether the specified element is present inside it or not => returns true or false

// console.log(Array.from("Akif")); // takes any object and returns the element inside it into each objects inside an array => [ 'A', 'k', 'i', 'f' ]

// console.log(Array.from({name: "Akif"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // this method returns all the values inside the variables and combines them and t=returns them in a new array

