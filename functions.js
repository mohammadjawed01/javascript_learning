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