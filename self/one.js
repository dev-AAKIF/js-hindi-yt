// function getItems(fruitList, ...args, favouriteFruit) {
//     return [...fruitList, ...args, favouriteFruit]
// }

// console.log(getItems(["banana", "apple"], ["pear"], "orange"))

// ====> the above code gives an error => syntax error because rest parameter must be used in the last position or as last formal parameter

function getItems(fruitList, ...args) {
    return [...fruitList, ...args]
}

// console.log(getItems(["banana", "apple"], ["pear"]))

// console.log(getItems)
// the above is the working code

const obj = {
    count: 1,
    increment() {
        return ++this.count;
    },
};

const inc = obj.increment;

console.log(inc());
console.log(obj.increment());

