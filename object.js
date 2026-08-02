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
    showBrand(){
        console.log("BMW");
}
};
car.showBrand();

//***********************************************************************************

let calculator = {
    multiply(a, b){
        return a * b;
    }
};
console.log(calculator.multiply(5, 6));



//***********************************************************************************

let user = {
    name: "Mohammad",
    welcome(){
        console.log(`Welcome ${user.name}`)
    }
}

user.welcome();

//***********************************************************************************

let student = {
    greet(){
        console.log("Hello");
    }
};

let teacher = {
    start(){
        student.greet();
    }
};

teacher.start();