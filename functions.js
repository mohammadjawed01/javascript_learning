function welcome(name) {
    return `Welcome to ${name}`;
}
console.log(welcome("javascript"));

// ***********************************************************************************

let subtract = (a, b) => {
    return a - b;
};
console.log(subtract(20, 5));

// ***********************************************************************************

const cube = (x) => {
    return x * x * x;
};
console.log(cube(3));

// ***********************************************************************************

const isPositive = (num) => {
    return num > 0;
}
console.log(isPositive(10));
console.log(isPositive(-5));

// ***********************************************************************************

function number(...val) {
    console.log(val);
}
number(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ***********************************************************************************

function getScore(...scores) {
    let total = 0;
    scores.forEach(function (score) {
        total += score;
    });
    return total;
}
console.log(getScore(10, 20, 30, 40, 50));

// ***********************************************************************************

function checkAge(age) {
    if (age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(16));

// ***********************************************************************************

function discountCalculator(discount) {
    return function (price) {
        return price - (price * discount / 100);
    }
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(1200));
console.log(twenty(1200));

// ***********************************************************************************

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char == "e" || char === "i" || char == "o" || char === "U") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"));

// ***********************************************************************************

let n = prompt("Enter a number");

let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);

// ***********************************************************************************

let sum = arr.reduce((res, current) => {
    return res + current;
})
console.log(`sum = ${sum}`);

let factorial = arr.reduce((res, current) => {
    return res * current;
})
console.log(`factorial = ${factorial}`);

// ***********************************************************************************

function isPositivevalue(num) {
    if (num === 0) {
        return "Zero";
    } else if (num > 0) {
        return "Positive";
    } else {
        return "Negitive"
    }
}
console.log(isPositivevalue(-5));

// ***********************************************************************************

function findsmallest(a, b) {
    if (a < b) { return a; }
    else if (b < a) {
        return b;
    }
    else {
        return "No smallest number"
    }
}
console.log(findsmallest(5, 4));

// ***********************************************************************************

function isEligible(age) {
    if (age >= 18) {
        return "Eligible";
    }
    else {
        return "Not Eligible";
    }
}
console.log(isEligible(20));

// ***********************************************************************************

function checkPassword(password) {
    let value = 8;
    if (value <= password.length) {
        console.log("Strong Password");
    }
    else {
        console.log("Weak Password");
    }
}
checkPassword("password");

// ***********************************************************************************

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= a && b >= c) {
        return b
    }
    else {
        return c;
    }
}
console.log(findLargest(10, 20, 50));

// ***********************************************************************************

function getLength(str) {
    return str.length;
}
console.log(getLength("Mohammad jawed"));

// ***********************************************************************************

function toUpper(str) {
    return str.toUpperCase();
}
console.log(toUpper("Mohammad jawed"));


// ***********************************************************************************

function reverseName(name) {
    let reversed = "";
    for (let i = name.length - 1; i >= 0; i--) {
        reversed += name[i];
    }
    return reversed;
}
console.log(reverseName("jawed"));

// ***********************************************************************************

function sumArray(arr) {
    let sum = 0;
    arr.forEach(function (arrs) {
        sum += arrs;
    });
    return sum;
}
console.log(sumArray([10, 20, 30]));

// ***********************************************************************************

function findMax(arr) {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]);
}
console.log(findMax([10, 5, 80, 25]));

// ***********************************************************************************



