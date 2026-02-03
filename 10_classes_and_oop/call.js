function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("Called");
    
}

function createUser(username, email, password) {
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const gameUser = new createUser("akif", "akif@google.com", "12345678")

console.log(gameUser)