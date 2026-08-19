// let id = document.getElementById("title");
// console.log(id);

// 2
// let id = document.getElementById("title");
// id.textContent = "New text";
// console.log(id);

// 3
// let id = document.getElementById("box");
// id.innerHTML = "<h2>New Heading</h2>"
// console.log(id)

// 4
// let id = document.getElementById("title");
// id.style.color = "red"
// id.style.backgroundColor = "black"
// id.style.fontSize = "18px"

// console.log(id);

// 5
// let img = document.getElementById("photo");
// img.getAttribute("src")

// 6
// let img = document.querySelector("#photo");
// img.setAttribute("src", "new.jpg");

// // 7
// let link = document.querySelector("#link");
// link.setAttribute("href", "new.html");

// 8
// let message = document.querySelectorAll(".message");
// message.forEach(function(val){
//     console.log(val);
// })

// 9
// let message = document.querySelectorAll(".message");
// message.forEach(function(val){
//     val.textContent = "JavaScript DOM"
// })
// console.log(message)

// 10
// let firstPara = document.querySelector(".text");

// 11
// let body = document.querySelector("body");
// let heading = document.createElement("h2");
// heading.textContent = "Welcome to JavaScript";
// body.appendChild(heading);

// 12
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.innerHTML = "<li>JavaScript</li>";
// ul.appendChild(li);

// 13
// let p = document.querySelector("p");
// p.remove()

// 14
// let id = document.querySelector("#title");
// id.classList = "heading";
// console.log(id)

// 15
// let h1 = document.querySelector("h1");
// h1.classList.remove("heading");

// 16
let boxh2 = document.querySelector("#box h2");
boxh2.textContent = "Javascript Student";
let para = document.createElement("p")
para.textContent = "Learning DOM"
box.appendChild(para);
let skills = document.querySelector("#skills");
let li = document.createElement("li");
li.textContent = "JavaScript";
skills.appendChild(li);
li.setAttribute("class", "highlight");
console.log(box);
console.log(skills);







