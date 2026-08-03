let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

// **************************************************************************

let student = {
    name: "Mohammad",
    age: 20
};

let { name, age } = student;

console.log(name);
console.log(age);


// **************************************************************************

let student = {
    name: "Mohammad"
};

let { name: studentName } = student;

console.log(studentName);


// **************************************************************************


let fruits = ["Apple", "Banana", "Mango"];

let [a, b] = fruits;

console.log(a);
console.log(b);


// **************************************************************************

let student = {
    address: {
        city: "Delhi"
    }
};

let {
    address: { city }
} = student;

console.log(city);


// **************************************************************************

let numbers = [10, 20];
let [a,b] = numbers;
console.log(a);
console.log(b);

// **************************************************************************

let student = {
    name: "Mohammad",
    course: "BCA"
};
let {name,course} = student;
console.log(name);
console.log(course);

// **************************************************************************

let colors = ["Red"];
let [a,b="Green"] = colors
    console.log(a);
console.log(b);

// **************************************************************************

let user = {
    name: "Mohammad"
};
let {name: studentName} = user;
console.log(studentName);

// **************************************************************************

let arr = [1, 2, 3];

let [x, , z] = arr;

console.log(x);
console.log(z);


// **************************************************************************





// **************************************************************************





// **************************************************************************