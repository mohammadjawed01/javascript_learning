class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

}

let javed = new User("javed@ai.com", "abc");

console.log(javed.email)
console.log(javed.password)