class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    //  getter and setter

    // get password() {
    //     return this.password.toUpperCase()
    // }

    // set password(value) {
    //     return this.password = value.toUpperCase()
    // }

    //---------------actual working best----------------------

    // get password() {
    //     return this._password.toUpperCase()
    // }

    // set password(value) {
    //     return this._password = value.toUpperCase()
    // }


    
    //------------------only showing the password and setting it as it was--------


    // get password() {
    //     return this._password.toUpperCase()
    // }

    // set password(value) {
    //     return this._password = value
    // }

    //

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}abc`
    }

    set password(value) {
        this._password = value
    }

}

const akif = new User("a@akif.ai", "akif")
console.log(akif.email)