// local storage
localStorage.setItem("username", "jawed");
// console.log(localStorage.getItem("username"));
//remove the item 
localStorage.removeItem("username")
//clear the local storage
localStorage.clear();

// 
localStorage.setItem("age", 20);
// console.log(localStorage.getItem("age"));   //localStorage give a string value 
//if we wnat a number than we do 
// let age = Number(localStorage.getItem("age"));
// console.log(typeof age);

// session storage
sessionStorage.setItem("username", "jawed");
// console.log(sessionStorage.getItem("username")); 
// sessionStorage.removeItem("username");
// sessionStorage.clear();

// from obj to string
// let user = {
//     name: "jawed",
//     age: 20
// }
// localStorage.setItem("user", user);


// they take a object as a string for solving this problem we use the JSON file
// let user = {
//     name: "jawed",
//     age: 20
// }

// localStorage.setItem("user", JSON.stringify(user));

// from string to obj

// let user = localStorage.getItem("user");
// let userdata = JSON.parse(data);
// console.log(userdata.age)

//
// let skills = ["HTML", "CSS", "JavaScript"];
// localStorage.setItem("skills", JSON.stringify(skills));
// let data = JSON.parse(localStorage.getItem("skills"));
// console.log(data[1]);

//
let user = {
    name: "Jawed",
    skills: ["HTML", "CSS", "JavaScript"]
}

localStorage.setItem("user", JSON.stringify(user));
let data = JSON.parse(localStorage.getItem("user"));
console.log(data.skills[1]);


