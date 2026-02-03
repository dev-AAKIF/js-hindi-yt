// let myName = "Akif"
// let myChannel = "Chai aur Code       "

// // console.log(myName.truelength);
// console.log(myChannel.length);

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    thor: 'hammer',
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}

Object.prototype.akif = function() {
    console.log(`Akif is present in all objects`);   
}

Array.prototype.heyAkif = function() {
    console.log(`Akif says Hiii`);
}

// heroPower.akif();


// myHeros.akif();

// myHeros.heyAkif();
// heroPower.heyAkif();


//----------------------------------------------------------

//------------------------Inheritance------------------------------


const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User


//------------------Modern Way of Prototype----------------------------------

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Chai aur Code     "


String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Akif".trueLength()
"ice tea".trueLength()
 