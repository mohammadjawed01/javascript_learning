//object literal

const user = {
    username: "jawed",
    loginCount:  8,
    signedIn: true,

    getUserDetail: function(){
        console.log("user detail recevied from database");
    }
}

console.log(user.username);
console.log(user.getUserDetail());