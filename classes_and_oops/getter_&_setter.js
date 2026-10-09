class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this.password.toUpperCase();
    }

    set password(value){
        this.password = value;
    }

}

let javed = new User("javed@ai.com", "abc");

console.log(javed.password)