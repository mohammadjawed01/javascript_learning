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
let age = Number(localStorage.getItem("age"));
// console.log(typeof age);

// session storage
sessionStorage.setItem("username", "jawed");
console.log(sessionStorage.getItem("username")); 
sessionStorage.removeItem("username");
sessionStorage.clear();


