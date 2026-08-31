//Assignment Operator
let x = 20;

console.log(x);

// -------------------------------------------------------------------------------------

let x = 10;

x += 5;

console.log(x);

// -------------------------------------------------------------------------------------

let x = 20;

x -= 8;

console.log(x);


// -------------------------------------------------------------------------------------

let x = 6;

x *= 5;

console.log(x);

// -------------------------------------------------------------------------------------

let x = 20;

x /= 4;

console.log(x);

// -------------------------------------------------------------------------------------

let x = 17;

x %= 5;

console.log(x);

// -------------------------------------------------------------------------------------

let x = 3;

x **= 2;

console.log(x);

// -------------------------------------------------------------------------------------

let x = 10;

x += 5;
x *= 2;

console.log(x);

// -------------------------------------------------------------------------------------

let x = 20;

x /= 2;
x -= 3;

console.log(x);

// -----------------------------------logical operators --------------------------------------

let age = 20;

console.log(age >= 18 && age <= 60);

// -------------------------------------------------------------------------------------

let marks = 30;

console.log(marks >= 33 || marks === 30);

// -------------------------------------------------------------------------------------

console.log(true && true || false);

// -------------------------------------------------------------------------------------

console.log(!(true && false));

// -------------------------------Conditional flow statement------------------------

let age = 20;

if (age >= 18) {
    console.log("You can vote.");
}

// -------------------------------------------------------------------------------------

let age = 25;
let citizen = true;

if (age >= 18 && citizen) {
    console.log("Eligible to vote");
}

// -------------------------------------------------------------------------------------

let age = Number(prompt("Enter your age"));

if (age >= 18) {
    alert("You can vote.");
}

// -------------------------------------------------------------------------------------

let age = 15;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// -------------------------------------------------------------------------------------

let age = Number(prompt("Enter your age"));

if (age >= 18) {
    alert("You can vote");
} else {
    alert("You cannot vote");
}

// -------------------------------------------------------------------------------------

let marks = 95;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// -------------------------------------------------------------------------------------
//nested if statement

let age = 16;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    }
}

// -------------------------------------------------------------------------------------

let age = 20;
let hasLicense = false;

if (age >= 18) {

    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("Get a driving license first");
    }

} else {
    console.log("You are too young to drive");
}

// -------------------------------------------------------------------------------------

let username = "admin";
let password = "1234";

if (username === "admin") {

    if (password === "1234") {
        console.log("Login Successful");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}

// -------------------------------Switch case-------------------------------------------

let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

// -------------------------------------------------------------------------------------

let fruit = "Apple";

switch (fruit) {

    case "Banana":
        console.log("Yellow");
        break;

    case "Apple":
        console.log("Red");
        break;

    case "Orange":
        console.log("Orange");
        break;

    default:
        console.log("Unknown Fruit");
}
