// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// ---------------------------------------

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// -----------------------------------------

for (let index = 0; index <= 10; index++) {
    const element = index;
    if ( element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and outer loop ${i}`);
        // console.log(i + "*" + j + " = " + i*j);      
    }   
}

let myArray = ["Flash", "Batman", "Superman", "Yourman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
} 

// -------------------------------------

// break and continue

// for (let index = 1; index <= 20; index++) {
//     console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 Detected");
//         break
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 Detected");
        continue
    }
    console.log(`Value of i is ${index}`);
}