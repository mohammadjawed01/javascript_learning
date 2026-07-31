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
console.log(checkAge(16)); 
