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
        console.log("Please Enter a Username");
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

console.log(loginUserMessage("Akif"));
