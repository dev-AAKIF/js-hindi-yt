function myName() {
  console.log("A");
  console.log("K");
  console.log("I");
  console.log("F");
}

// myName // function referencing => we reference the function to its memory and not call it
// myName() // function calling => function calling, we call the function

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result
    return num1 + num2
}

const result = addTwoNumbers(2,3)
// console.log("Result:", result);

// console.log(addTwoNumbers);

// function loginUserMessage (username) {
//     if(username === undefined) {
//         console.log("Please Enter a Username");
//         return
//     }
//     return  `${username} logged In Successfully`
// }

function loginUserMessage (username) {
    if(!username) {
        // console.log("Please Enter a Username");
        return
    }
    return  `${username} logged In Successfully`
}

// function loginUserMessage (username = "Sam") {
//     if(!username) {
//         console.log("Please Enter a Username");
//         return
//     }
//     return  `${username} logged In Successfully`
// }

// console.log(loginUserMessage("Akif"));

// function calculateCartPrice(num1) {
//     return num1
// } // => in this example, only the first value is returned and hence we need to use rest/spread operator

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 30000));

const user = {
    username: "Akif",
    price: 300
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user); // => passing the exact object which has been declared earlier
handleObject({
    username: "Sam",
    price: 599
}) // => passing the object as an argument

const myNewArray = [200,300,400,500]

function returnSecondValue(anyArray) {
    return anyArray[1]
}

// console.log(returnSecondValue(myNewArray)); //=> passing an already declared array
console.log(returnSecondValue([1100,1200,1300,1400])); //=> passing an array through argument

