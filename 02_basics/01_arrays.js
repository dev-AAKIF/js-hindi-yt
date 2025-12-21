// Arrays

const myArr = [1,2,3,4]
const heros = ["Batman", "Loki"]

const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr[1]); // returns the element on 1index i.e. position2
// console.log(myArr); // returns the whole array

// myArr.push(5) // pushes the value=5 into the array in the last position

// myArr.push(6) // pushes the value6 in last position in array

// myArr.pop() // it pops = removes the last value from the array

// myArr.unshift(9) // it adds an element in the start of array

// myArr.shift() // it removes the first element of array

// console.log(myArr.includes(1)); // it checks whether the desired element is present inside the array or not and it returns status as either true or false

// console.log(myArr.indexOf(9)); //returns the index of desired element and if the desired element is not present then it returns => -1

// console.log(myArr.indexOf(19));

// console.log(myArr.indexOf(3)); // it returns the position i.e.  2(0-1-2) 

// const newArr = myArr.join() // join method adds all of the elements of array into a string

// console.log(myArr);

// console.log(newArr);

// console.log(typeof newArr); // string

// ---------------- slice and splice methods --------------------

console.log("A", myArr);

const myNarray1 = myArr.slice(1,3) // slices the part of array from index specified and it includes the starting index element and excludes the last index element and it does not changes the original array
console.log("B", myArr);
console.log(myNarray1); // [2,3]

const myNarray2 = myArr.splice(1,3) // it slices the part of array from specified indexded and it inclues the starting element and as well as the ending element of the array and it also changes the original array such that it removes the splice part that has been specified
console.log("C", myArr); // result => [1]
console.log(myNarray2); // result => [ 2, 3, 4 ]












