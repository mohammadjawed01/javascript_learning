// 1.
let heading1 = document.querySelector("h1");
console.log(heading1);

// 2.
let message1 = document.querySelector(".message1");
console.log(message1);

// 3.
let title1 = document.querySelector("#title1");
console.log(title1.textContent); 

// 4.
let button = document.querySelector("button");
console.log(button);

// 5.
let para = document.querySelector("p");
console.log(para.textContent); 

// 6.
let x = document.querySelector("#title2");
console.log(x);
console.log(x.textContent);

// 7.
let title3 = document.getElementById("title3");
console.log(title3.textContent);

// 8.
let message2 = document.querySelectorAll(".message2");
console.log(message2);

// 9.
let item = document.getElementsByClassName("item");
console.log(item[1].textContent);

// 10.
let heading2 = document.getElementsByTagName("h2");
console.log(heading2[2].textContent);

// 11.
let paragraph = document.querySelector("p");
paragraph.textContent = "first paragraph";

// 12.
let title4 = document.querySelector("#title4");
title4.textContent = "Welcome Mohammad";
console.log(title4);

// 13.
let message3 = document.querySelector("#message3")
message3.innerText = "New Message";
console.log(message3);

// 14.
let box1 = document.querySelector("#box1");
box1.innerHTML = "<h2>JavaScript</h2>";
console.log(box1);

// 15
let box2 = document.querySelector("#box2");
box2.innerHTML = `
    <h1>New</h1>
    <p>JavaScript</p>
`;
console.log(box2);

let message = document.querySelector("#message");
message.innerHTML = "<h1>Hello</h1>";
console.log(message);