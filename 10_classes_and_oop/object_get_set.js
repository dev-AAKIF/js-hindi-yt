const User = {
    _email: "a@ak.com",
    _password: "abc",

    get(email) {
        return this._email.toUpperCase()
    },

    set(value) {
        this_email = value
    }
}

// const chai = new User()

console.log(User._email);
