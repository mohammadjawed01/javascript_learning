function welcome(name) {
    return `Welcome to ${name}`;
}
console.log(welcome("javascript"));

let subtract = (a, b) => {
    return a - b;
};
console.log(subtract(20, 5));

const cube = (x) => {
    return x * x * x;
};
console.log(cube(3));

const isPositive = (num) => {
    return num > 0;
}
console.log(isPositive(10));
console.log(isPositive(-5)); 

function number(...val) {
    console.log(val);  
}
number(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function getScore(...scores) {
    let total = 0;
    scores.forEach(function(score) {
        total += score;
    });
    return total;
}
console.log(getScore(10, 20, 30, 40, 50));

function checkAge(age){
    if (age <18) return "Too young";
    return "Allowed";
}
console.log(checkAge(16)); You can see the error right now. Let's move forward. What about this one? output is output high ok function statement and that is why is output. So yeah, that's there very, very nice. And let's let's that's that's about it guys we have finished all twenty three questions were there and we finished all of those and that was the practice session for functions I believe if you appreciate the hard work in this tutorial if you appreciate the nights days hours I have put into this I would like to hear your thoughts comment section or not I would like to see your Pov on that for we have a lot coming up now the next topic is R is and then after that we have objects so let's go let's start with Bmi calculator which is the practice by the way practice session practice writing a Pmi calculator I think Bmi fat I'm not sure on that but but height square equate or height square let's go so let's say sixty nine kgs and height anyway one point seven meters I believe now so console dot lock and that is it and you will see the answers now so there you go twenty three point eight that is my Bmi now if you don't want ether lumba sounds alright is answer but lumba sari right top is poori cheeseco kat let's say math dot I don't know how do you say it math dot round kalata maybe just put it there let's see what we get twenty four ya fair ya fair just a second formula non volcision precision sign sign random no no no where is that where is that where are you my friend where are you my friend yellow would you be with so much right please the joke out please where are you that's yellow at least how to make decimal to two places two two places in Js two fixed two fixed two fix is the thing so mat dot two fix I think mat dot two fix no mat dot to fix like pmij value eight dot two fixed directly I think is yes so basically Jobi value R and we'll get it twenty three point eight eight so basically point basic answer so fixed the job value two point point that is what it is alright let's go so that is how you make Bmi calculator that is it guys so let's move to create a reusable discount calculator let's go so let's create our reusable discount calculator Hof up high order functions higher order function to omnibia discount calculator Tg function higher function you close your function I still believe but let's go discount calculator reusable discount calculator discount calculator discount calculator but trust me let's go function so basically it's gonna make discount discount calculator discount discount the discount price valuable the price the I think so point point one say point once a yes multiply point one or or overall price so percent off I'm sorry discount but take up function function discount upkeep price the minus return return value discount ticket two I think two so
