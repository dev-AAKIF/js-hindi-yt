// fetch("https://mrcuber.com").then().catch().finally()

// A Promise is an Object in Javascript

// Promise was introduced in ES6 and before that we didn't had the concept of Promise






// --------------------------------------------


//promise basic, how to create a normal promise

// const promiseOne = new Promise()







//---------------------------1st-------------------


// const promiseOne = new Promise(function (resolve, reject){
//     // Do an async tasks
//     // Db calls, cryptography, network

//     setTimeout(function() {
//         console.log('Async Task is Completed');
//         resolve();
//     }, 1000);
// });

// promiseOne.then(function() {
//     console.log("Promise Consumed");    
// })





// -----------------------------------2nd---------------------------------



// new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         console.log("Async Task 2 Completed");
//         resolve();
//     }, 1000);
// }).then(function() {
//     console.log("Promise Resolved");
// })





// -----------------------------------3rd---------------------------------


//------ Passing objects or data from promise to resolve


// const promiseThree = new Promise(function(resolve, reject) {

//     setTimeout(function() {
//         resolve({username: "chai", email: "akif@example.com"})
//     }, 1000);
// })

// promiseThree.then(function(user) {
//     console.log(user);
    
// })




// -----------------------------------4th---------------------------------


// const promiseFour = new Promise(function( resolve, reject) {
//     setTimeout(function() {
//         let error = true
//         if(!error) {
//             resolve({username: "Akif", password: "1234567890"})
//         } else {
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error) {
//     console.log(error)
// })
// .finally(() => {
//     console.log("The Promise has either been resolved or rejected")
// })





// -----------------------------------5th---------------------------------


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "AZ", password: "123"})
        } else {
            reject("Error: Something went wrong")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// -----------------------------------6th---------------------------------



