// 1.
// let heading = document.querySelector("h1");
// console.log(heading);

// 2.
let message = document.querySelector(".message");
console.log(message);

// 3.
let title = document.querySelector("#title");
console.log(title.textContent); 

// 4.
let button = document.querySelector("button");
console.log(button);

// 5.
let para = document.querySelector("p");
console.log(para.textContent); 

// 6.
let x = document.querySelector("#title");
console.log(x);
console.log(x.textContent);

// 7.
let titles = document.getElementById("title1");
console.log(titles.textContent);

// 8.
let messages = document.querySelectorAll("p");
console.log(messages);

// 9.
let item = document.getElementsByClassName("item");
console.log(item[1].textContent);

// 10.
let headings = document.getElementsByTagName("h2");
console.log(headings[2].textContent);

// 11.
let paragraph = document.querySelector("p");
paragraph.textContent = "first paragraph"
