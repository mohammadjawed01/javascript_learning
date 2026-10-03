function setUserName(username){
    //complex DB calls

    this.username = username;
    console.log("called")
}

function createUser(username, email, password){
    setUserName.call(this,username);

    this.email = email;
    this.password = password;
}

let jawed = new createUser("jawed", "jawed@fb.com", "123");
console.log(jawed)