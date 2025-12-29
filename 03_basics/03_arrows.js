const user ={
    username : "Akif",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Akif"
//     console.log(this.username);   
// }

// chai()
// console.log(this);

// +++++++++++ Arrow Function  +++++++

{/*
    instead of function chai() {
        
    }

    or instead of 

    const chai = function() {

    }

    ----------------- xxx ----------------

    we declare arrow functions as below

    () => {
        
    }

    or

    const chai = () => {
        
        }

    */}

const chai = () => {
    let username = "Akboss"
    console.log(this);
    
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

//+++++++++++ Implicit Return Arrow Function

// ++++++++++= Implicit Return means we do not need to use the word or term return . it is a single line code most of the times

 
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 username:"Akif")

const addTwo = (num1,num2) => ({username:"Akif"})

console.log(addTwo(7,3));

// const myArray = [2,3,4,5,6]

// myArray.forEach()