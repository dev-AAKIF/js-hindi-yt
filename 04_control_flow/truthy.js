// const userEmail = "z@akif.az"
const userEmail = []

if (userEmail ){
    console.log("Got User Email");
} else {
    console.log("Don`t have user Email");
    
}

// falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, Nan





// truthy values

// "0", "false", " ", [], {}, function() {}

// if (userEmail.length === 0 ) {
//     console.log("Array is Empty");  
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
    
}