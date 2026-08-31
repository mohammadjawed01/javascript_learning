//forOf loop ---------------------------------------------------------------------

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

// ---------------------------------------------------------------------------

let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}

// ---------------------------------------------------------------------------

let numbers = [10, 20, 30];

let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log(sum);

// ---------------------------------------------------------------------------

let numbers = [2, 4, 6, 8, 10];
for (let number of numbers) {
    if (number > 5) {
        console.log(number);
    }
}

// ---------------------------------------------------------------------------

let learn = ["HTML", "CSS", "JavaScript"];
for (let subject of learn) {
    console.log(`I an learning ${subject}`);

}

// -----------------------------ForEach Loop--------------------------------

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit) {
    console.log(fruit);
});

// ---------------------------------------------------------------------------

let numbers = [10, 20, 30];

numbers.forEach(function (number) {
    console.log(number);
});

// ---------------------------------------------------------------------------

let numbers = [10, 20, 30];

let sum = 0;

numbers.forEach(function (number) {
    sum += number;
});

console.log(sum);

// ---------------------------------------------------------------------------

let arr = [10, 20, 30];

arr.forEach(function (value, index) {

    arr[index] = value + 5;

});

console.log(arr);

// ---------------------------------------------------------------------------

let arr = [1, 2, 3]; 
arr.forEach(function (value, index) { 
    arr[index] = value * 2; 
}); 
    console.log(arr);

// -------------------------------ForIn loop----------------------------------

let student = {
    name: "Mohammad",
    age: 20,
    course: "BCA"
};

for (let key in student) {
    console.log(key);
}

// ---------------------------------------------------------------------------

let student = {
    name: "Mohammad",
    age: 20,
    course: "BCA"
};

console.log(Object.keys(student));

// ---------------------------------------------------------------------------

let student = {
    name: "Mohammad",
    age: 20
};

let keys = Object.keys(student);

let upper = keys.map(function (key) {
    return key.toUpperCase();
});

console.log(upper);

// ---------------------------------------------------------------------------

let phone = {
    brand: "Samsung",
    color: "Black"
};

console.log(Object.values(phone));

// ---------------------------------------------------------------------------

let student = {
    name: "Mohammad",
    course: "BCA"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// ---------------------------------------------------------------------------

let user = {
    name: "Ali",
    age: 25
};

console.log(Object.entries(user));

// ---------------------------------------------------------------------------