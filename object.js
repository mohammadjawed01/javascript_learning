let book = {
    title: "JavaScript",
    price: 500
}
console.log(book.title);

//***********************************************************************************

let employee = {
    name: "Rahul",
    salary: 50000
}

let key = "salary";

console.log(employee[key]);

//***********************************************************************************

let student = {
    name: "Mohammad",
    course: "BCA"
}

student.city = "Delhi";

console.log(student);

//***********************************************************************************

let obj = {
    brand: "Apple",
    price: 80000
}

obj.price = 90000

console.log(obj);

//***********************************************************************************

let student = {
    greet() {
        console.log("Hello");
    }
};

student.greet();

//***********************************************************************************

let car = {
    brand: "BMW",
    showBrand() {
        console.log("BMW");
    }
};
car.showBrand();

//***********************************************************************************

let calculator = {
    multiply(a, b) {
        return a * b;
    }
};
console.log(calculator.multiply(5, 6));



//***********************************************************************************

let user = {
    name: "Mohammad",
    welcome() {
        console.log(`Welcome ${user.name}`)
    }
}

user.welcome();

//***********************************************************************************

let student = {
    greet() {
        console.log("Hello");
    }
};

let teacher = {
    start() {
        student.greet();
    }
};

teacher.start();


//***********************************************************************************

let student = {
    name: "Mohammad",
    age: 20
};

for (let key in student) {
    console.log(key);
}

//***********************************************************************************

let student = {
    name: "Mohammad",
    age: 20
};

for (let key in student) {
    console.log(student[key]);
}

//***********************************************************************************

let info = {
    name: "Mohammad",
    age: 20,
    city: "Delhi"
};

for (let key in info) {
    console.log(key);

}

//***********************************************************************************

let info = {
    name: "Mohammad",
    age: 20,
    city: "Delhi"
};

for (let key in info) {
    console.log(info[key]);

}

//***********************************************************************************

let mobile = {
    brand: "Apple",
    price: 90000,
    color: "Black"
}
console.log(Object.keys(mobile));

//***********************************************************************************

let mobile = {
    brand: "Apple",
    price: 90000,
    color: "Black"
}
console.log(Object.values(mobile));

//***********************************************************************************

let object = {
    language: "JavaScript",
    type: "programming",
    year: 1995
}
for (let key in object) {
    console.log(key + " : " + object[key]);
}

//***********************************************************************************

let student = {
    name: "Mohammad",
    address: {
        city: "Delhi"
    }
};

console.log(student.address.city);


//***********************************************************************************

let user = {
    name: "MOhammad",
    address: {
        city: "Delhi",
        state: "Delhi"
    }
};
console.log(user.address.state);

//***********************************************************************************

let object = {
    title: "JavaScript",
    topics: ["Variables", "Functions", "Objects"]
};
console.log(object.topics[1]);

//***********************************************************************************

let student = [
    {
        name: "Ali",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
];
console.log(student[1].name);

//***********************************************************************************

let students = [
    {
        name: "Ali",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
];
for (let student of students) {
    console.log(student.name);
}

//***********************************************************************************

let object = {
    company: {
        name: "OpenAI"
    },
    location: {
        city: "San Francisco"
    }
};
console.log(object.location.city);

//***********************************************************************************

let student = {
    name: "Mohammad",

    greet() {
        console.log(this.name);
    }
};

student.greet();

//***********************************************************************************

let student = {
    name: "Mohammad",

    changeName(newName) {
        this.name = newName;
    }
};

student.changeName("Rahul");

console.log(student.name);


//***********************************************************************************

let bank = {
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    }
};

bank.deposit(500);

console.log(bank.balance);


//***********************************************************************************

let object = {
    name: "Mohammad",
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
};
object.sayHello();


//***********************************************************************************

let mobile = {

    brand: "Apple",

    price: 80000,

    showPrice() {

        console.log(this.brand);

        console.log(this.price);

    }

};

mobile.showPrice();


//***********************************************************************************

let object = {
    counter: 0,
    increase() {
        this.counter++;
    }
};
object.increase();
object.increase();
object.increase();
console.log(object.counter);

//***********************************************************************************

let object = {
    name: "Mohammad",
    greet() {
        console.log(`Hello ${this.name}`);

    },
    bye() {
        this.greet();
        console.log("Good Bye");
    }
};
object.bye();

//***********************************************************************************

//spread operator
let numbers = [10, 20, 30];

let copy = [...numbers];

copy[0] = 100;

console.log(numbers);
console.log(copy);

//***********************************************************************************
//merging two arrays using spread operator

let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];

console.log(result);


//***********************************************************************************

//Add new elements to an array using spread operator
let numbers = [20, 30];

let result = [10, ...numbers, 40];

console.log(result);

//***********************************************************************************

// ..merging two objects using spread operator
let a = {
    name: "Mohammad"
};

let b = {
    age: 20
};

let result = {
    ...a,
    ...b
};

console.log(result);


//***********************************************************************************

let arr = [10, 20];

let copy = [...arr];

console.log(copy);


//***********************************************************************************

let a = {
    name: "Ali"
};

let b = {
    name: "Mohammad"
};

let result = {
    ...a,
    ...b
};

console.log(result.name);

//***********************************************************************************
let numbers = [10, 20, 30];
let copies = [...numbers];
console.log(copies);

//***********************************************************************************

let a = [1, 2];

let b = [3, 4];

let copies = [...a,...b];

console.log(copies);

//***********************************************************************************

let numbers = [10, 20, 30];
let newArr = [5,...numbers,40]
console.log(newArr);

//***********************************************************************************

let student = {
    name: "Mohammad"
};
let copy = {...student, course: "BCA"}
console.log(copy);

//***********************************************************************************

//rest operator
function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10,20,30));

//***********************************************************************************

let student = {
    name: "Mohammad",
    age: 20,
    city: "Delhi"
};

let { name, ...info } = student;

console.log(info);

//***********************************************************************************

function show(...numbers) {
    console.log(numbers);
}

show(5, 10);

//***********************************************************************************

function test(a, ...rest) {
    console.log(a);
    console.log(rest);
}

test(1, 2, 3, 4);

//***********************************************************************************

let arr = [100];

let [first, ...rest] = arr;

console.log(first);
console.log(rest);

//***********************************************************************************

let numbers = [10, 20, 30, 40];
let [a, ...rest] = numbers;
console.log(a);
console.log(rest);


//***********************************************************************************

let user = {
    name: "Mohammad",
    age: 20,
    city: "Delhi"
};
let {name, ...rest} = user;
console.log(name);
console.log(rest);

//***********************************************************************************

function printNumbers(...number){
    console.log(number);
};
printNumbers(5, 10, 15);

//***********************************************************************************

function  introduce(name, ...skills) {
    console.log(name);
    console.log(skills);
}
introduce("Mohammad", "HTML", "CSS", "JavaScript");

//***********************************************************************************
//optional chaining

let student = {
    name: "Mohammad"
};

console.log(student?.name);


//***********************************************************************************

let student = {
    name: "Mohammad"
};

console.log(student?.city);

//***********************************************************************************

let user = {
    greet() {
        return "Hello";
    }
};

console.log(user.greet?.());

//**********************************************************************************

let student = {
    name: "Mohammad"
};
console.log(student.address?.city);

//***********************************************************************************

let numbers = [10, 20, 30];
console.log(numbers?.[0]);

//**********************************************************************************

let user = {
    greet() {
        console.log("Welcome");
    }
};
console.log(user.greet?.());

//**********************************************************************************

let student = {
    address: {
        city: "Delhi"
    }
};
console.log(student.address.city?.pin);


//**********************************************************************************
