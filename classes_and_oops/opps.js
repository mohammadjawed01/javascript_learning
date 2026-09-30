//object literal

const user = {
    username: "jawed",
    loginCount:  8,
    signedIn: true,

    getUserDetail: function(){
        // console.log("user detail recevied from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetail());
console.log(this);
