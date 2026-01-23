const user = {
    username : "Akif",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from Database");
        // console.log(`Username: ${this.username}`);
        // console.log(this)
    }
}

// console.log(user);
// console.log(userOne.username);
// console.log((user.getUserDetails));

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new User("Akif", 24, true)
const userTwo = new User("James", 20, false)


console.log(userOne);
console.log(userTwo);

// console.log(user);

