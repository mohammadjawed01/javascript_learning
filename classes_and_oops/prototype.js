// let myName = "jawed      ";
// let myChannel = "codewithjawed        ";

// console.log(myName.trim().length);
// console.log(myChannel.trueLenght);


let myHeroes = ["thor", "spiderman"];

let heroPowers = {
    thor: "hammer",
    spiderman: "spider sence"
}

Object.prototype.jawed = function(){
    console.log(`jawed is present in all over the object`);
}

Array.prototype.heyJawed = function(){
    console.log(`jawed says hello to all the arrays`);
}

// heroPowers.jawed();
myHeroes.jawed();
myHeroes.heyJawed();
// heroPowers.heyJawed();



// inheritance

let anotherUser = "zubair      ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length of the string is ${this.trim().length}`);
}

anotherUser.trueLength();
"jawed".trueLength();
"codeWithJawed".trueLength();