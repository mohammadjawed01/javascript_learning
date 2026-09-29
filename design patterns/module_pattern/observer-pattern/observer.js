class YoutubeChannel{
    constructor(){
        this.subcribers = [];
    }

    subcribe(user){
        this.subcribers.push(user);
        user.update(`${user.name}, you have subscribe the channel`);
    }

    Unsubcribe(user){
        this.subcribers = this.subcribers.filter((user) => sub != user);
        user.update(`${user.name}, you have Unsubscribe the channel`);
    }

    notify(message){
        this.subcribers .forEach((sub) => sub.update(message));
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name}, ${data}`);
    }
}

let codingChannel = new YoutubeChannel();
let user1 = new User("jawed");

codingChannel.subcribe(user1);
codingChannel.notify("we are closing our channel, because its April 1st");