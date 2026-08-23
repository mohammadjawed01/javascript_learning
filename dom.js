// 1.
// let heading1 = document.querySelector("h1");
// console.log(heading1);

// 2.
// let message1 = document.querySelector(".message1");
// console.log(message1);

// 3.
// let title1 = document.querySelector("#title1");
// console.log(title1.textContent); 

// 4.
// let button = document.querySelector("button");
// console.log(button);

// 5.
// let para = document.querySelector("p");
// console.log(para.textContent); 

// 6.
// let x = document.querySelector("#title2");
// console.log(x);
// console.log(x.textContent);

// 7.
// let title3 = document.getElementById("title3");
// console.log(title3.textContent);

// 8.
// let message2 = document.querySelectorAll(".message2");
// console.log(message2);

// 9.
// let item = document.getElementsByClassName("item");
// console.log(item[1].textContent);

// 10.
// let heading2 = document.getElementsByTagName("h2");
// console.log(heading2[2].textContent);

// 11.
// let paragraph = document.querySelector("p");
// paragraph.textContent = "first paragraph";

// 12.
// let title4 = document.querySelector("#title4");
// title4.textContent = "Welcome Mohammad";
// console.log(title4);

// 13.
// let message3 = document.querySelector("#message3")
// message3.innerText = "New Message";
// console.log(message3);

// 14.
// let box1 = document.querySelector("#box1");
// box1.innerHTML = "<h2>JavaScript</h2>";
// console.log(box1);

// 15
// let box2 = document.querySelector("#box2");
// box2.innerHTML = `
//     <h1>New</h1>
//     <p>JavaScript</p>
// `;
// console.log(box2);

// 16
// let message4 = document.querySelector("#message");
// message4.innerHTML = "<h1>Hello</h1>";
// console.log(message4);

// 17
// let image = document.querySelector("#photo");
// image.setAttribute("src", "new.jpg");
// console.log(image.getAttribute("src"));

// 18
// let link = document.querySelector("#link");
// console.log(link.getAttribute("href"));

// 19
// let message= document.querySelector("#message");
// message.setAttribute("class", "highlight");
// console.log(message.getAttribute("class"));

// 20
// let button1 = document.querySelector("#btn");
// button1.removeAttribute("disabled");

// 21
// let box = document.querySelector("#box");
// box.setAttribute("data-name", "student");

// 22
// let name = document.querySelector("#name");
// name.setAttribute("placeholder", "Enter your name");

// 23
// let parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = 'orange';

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// let dayOne = document.querySelector(".day")
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log("NODES: ", parent.childNodes);

// 24
// let div = document.createElement('div')
// console.log(div);
// div.className = "main";
// div.id = Math.round(Math.random() * 10 + 1);

// div.setAttribute("Title", "generated title");
// div.style.backgroundColor = "green";
// div.style.padding = "12px";
// div.innerText = "jawed";
//both are correct
// let addText = document.createTextNode("jawed");
// div.appendChild(addText)

// document.body.appendChild(div)

// 25
// function addLanguage(langName){
//     let li = document.createElement('li');
//     li.innerHTML = `${langName}`
//     document.querySelector(".language").appendChild(li);
// }
// addLanguage("python");
// addLanguage("typescript");

// function addoptiLanguage(LangName) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(LangName));
//     document.querySelector(".language").appendChild(li);
// }
// addoptiLanguage('golang');

//Edit
// let secondlang = document.querySelector("li:nth-child(2)");
// secondlang.innerHTML = "Mojo";
// let newLi = document.createElement("li");
// newLi.textContent = "Mojo"
// secondlang.replaceWith(newLi);

//edit
// let firstlang = document.querySelector("li:first-child");
// firstlang.outerHTML = "<li>Typescript</li>"

//remove

// let lastLang = document.querySelector("li:last-child")
// lastLang.remove()

// 26
// let ul = document.querySelector("ul");
// let li = document.createElement("li")
// li.innerHTML = "<li>New Task</li>"
// ul.appendChild(li);

// 27
// let img = document.createElement("img");
// img.setAttribute("src", "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// let div = document.querySelector("div").prepend(img)

//
// console.log(message.className);

// let box = document.querySelector("#box");

// box.style.color = "red";
// box.style.backgroundColor = "black";

// console.log(box.style.color);
// console.log(box.style.backgroundColor); 


// let box = document.querySelector("#box");

// box.classList.remove("active");
// box.classList.add("hidden");

// let text = document.querySelector("#title");
// text.style.color = "blue"
// text.style.backgroundColor = "yellow"
// text.style.fontSize = "30px"

// document.querySelector("#box").className = "card active"
// console.log(box)

// let box = document.querySelector("#box")
// box.classList.add("active")
// box.classList.add("hightlight")
// box.classList.remove("container")
// console.log(box)

// let box = document.querySelector("#box");
// console.log(box.classList.contains("active"))


//
// let box = document.querySelector("#box");
// box.classList.toggle("active")
// console.log(box)

//
// let para = document.createElement("p")
// let para1 = document.createElement("p")
// para.textContent = "HTML"
// para1.textContent = "CSS"
// let box = document.querySelector("#box");
// box.append(para)
// box.append(para1)

// 
// let skills = document.querySelector("#skills");
// let skillli = ["HTML", "CSS", "JavaScript"];

// for(let i = 0; i<skillli.length; i++){
//     let li = document.createElement("li");
//     li.textContent = skillli[i]
//     skills.append(li)
// }

// 
// let box = document.querySelector("#box");
// let paras = ["One", "Two", "Three"];
// for (const element of paras) {
//     let p = document.createElement("p");
//     p.textContent = element
//     box.append(p)
//     console.log(p)
// }

// let box = document.querySelector("#box");
// let para = document.createElement("p");
// para.textContent = "Hello";
// box.appendChild(para);
// console.log(box);

//
// let box = document.querySelector("#box");
// box.appendChild("Hello");
// let box =  document.querySelector("#box");
// let heading = document.createElement("h2");
// heading.textContent = "JavaScript DOM";
// box.appendChild(heading);


// 
// let skills = document.querySelector("#skills");
// let liitem = ["HTML", "CSS", "Javascript"];
// for (const element of liitem) {
//     let li = document.createElement("li")
//     li.textContent = element
//     skills.appendChild(li)
// }

// 
// let box = document.querySelector("#box");
// let para = ["HTML", "CSS", "JavaScript"];

// for (const element of para) {
//     let p = document.createElement("p");
//     p.textContent = element;
//     box.appendChild(p);
// }

// 
// let li = document.createElement('li');
// li.textContent = "HTML";
// let skills = document.querySelector("#skills");
// skills.prepend(li);

// 
// let box = document.querySelector("#box");
// box.prepend("New");

// 
// let skills = document.querySelector("#skills");
// let items = ["HTML", "CSS"];

// for (const element of items) {
//     let li = document.createElement("li");
//     li.textContent = element;
//     skills.prepend(li)
// }

// 
// let box = document.querySelector("#box");
// let heading = document.createElement("h2");
// heading.textContent = "JavaScript DOM";
// box.before(heading);

// 
// let box = document.querySelector("#box");
// let h2 = document.createElement("h2");
// h2.textContent = "Heading";
// let text = "Welcome";
// box.before(h2, text);

// 
// let box = document.querySelector("#box");
// let h2 = document.createElement("h2")
// let p = document.createElement("p")

// h2.textContent = "JavaScript";
// p.textContent = "Learning DOM";

// box.before(h2, p)

// 
// let box = document.querySelector("#box");
// let h2 = document.createElement("h2");
// h2.textContent = "JavaScript DOM";

// box.after(h2);

// 
// let box = document.querySelector("#box");
// let h2 = document.createElement("h2");
// let p = document.createElement("P");
// h2.textContent = "JavaScript";
// p.textContent = "Learning DOM";

// box.after(h2,p);

// 
// let box = document.querySelector("#box");
// let h2 = document.createElement("h2");
// let p1 = document.createElement("P");
// let p2 = document.createElement("P");
// h2.textContent = "JavaScript";
// p1.textContent = "Learning DOM";
// p2.textContent = "Practice";

// box.after(h2,p1,p2);

// 
// let second = document.querySelector("#second");
// second.remove();

// 
// let two = document.querySelector("#two");
// two.remove();
// console.log(box);

// 
// let para = document.querySelector("#para");
// para.remove();
// para.remove();

// 
// let li = document.querySelectorAll(".remove");
// console.log(li)
// li.forEach(function(val){
//     val.remove()
// })

// 
// let p = document.querySelectorAll(".delete");
// p.forEach(function (val){
//     val.remove()
// })

// 
// let box = document.querySelector("#para");
// console.log(box.parentElement)

// let para = document.querySelector("#para");

// 
// let para = document.querySelector("#para"); 
// let parent = para.parentElement;
// console.log(parent.parentElement);

// 
// let para = document.querySelector("#para");
// let parent = para.parentElement;
// let container = parent.parentElement;
// console.log(container)

// 
// let para = document.querySelector("#para");
// console.log(para.parentElement.parentElement);

// 
// let para = document.querySelector("#para");
// let main = para.parentElement.parentElement.parentElement;
// console.log(main)

// 
// let box =  document.querySelector("#box");
// let first = box.children[0];
// console.log(first);

// 
// let box = document.querySelector("#box");
// let last = box.children[2];
// console.log(last)

// 
// let boxs = document.querySelector("#box");
// // let all = boxs.children;
// for (const element of boxs.children) {
//     console.log(element)
// }

// 
// let box = document.querySelector("#box");
// let all = box.children;
// for (let child of all) {
//     child.textContent ="Learning"
//     console.log(child)
// }

// 
// let skills = document.querySelector("#skills");
// let first = skills.firstElementChild;
// first.textContent = "Frontend"
// console.log(first)

// 
// let box = document.querySelector("#box");
// let first = box.firstElementChild;
// first.remove();
// console.log(box)

// 
// let box = document.querySelector("#box");
// let first = box.firstElementChild;
// first.textContent =  "JavaScript DOM"


// 
// let box = document.querySelector("#box");
// let first = box.firstElementChild;
// first.textContent = "JavaScript DOM"
// let second = box.children[1];
// second.remove();

// 
// let skills = document.querySelector("#skills");
// let last = skills.lastElementChild;
// last.textContent = "React";

// 
// let box = document.querySelector("#box");
// let last = box.lastElementChild;
// last.remove()

// 
// let box = document.querySelector("#box");
// let last = box.lastElementChild;
// last.textContent = "JavaScript";
// let first = box.firstElementChild;
// first.remove()

// 
// let one = document.querySelector("#one");
// let next = one.nextElementSibling;
// next.textContent = "JavaScript";


// 
// let two = document.querySelector("#two");
// let next = two.nextElementSibling;
// next.remove()

// 
// let one  = document.querySelector("#one");
// let next = one.nextElementSibling.nextElementSibling;
// next.textContent = "JavaScript"

// 
// let one = document.querySelector("#one");
// let next = one.nextElementSibling;
// next.textContent = "JavaScript"
// next.nextElementSibling.remove();


// 
// let three = document.querySelector("#three");
// let prevoius = three.previousElementSibling;
// prevoius.textContent = "JavaScript";

// 
// let three = document.querySelector("#three");
// let previous = three.previousElementSibling;
// previous.remove()

// 
// let four = document.querySelector("#four");
// let previous = four.previousElementSibling.previousElementSibling;
// previous.textContent = "JavaScript";

// 
// let four = document.querySelector("#four");
// let previous = four.previousElementSibling;
// previous.textContent = "JavaScript";
// previous.previousElementSibling.remove()

// 
// let text  = document.querySelector("#text");
// let container = text.closest(".container");
// container.textContent = "JavaScript DOM";
// console.log(container);


// 
// let text = document.querySelector("#text");
// let section  = text.closest(".section")
// console.log(section)

// 
// let text = document.querySelector("#text");
// let container = text.closest(".section").closest(".container");
// console.log(container)

// 
// let box = document.querySelector("#box");
// let nodes = box.childNodes;
// console.log(nodes)

// 
// let box = document.querySelector("#box");
// let nodes = box.childNodes;
// console.log(nodes[0]);

// 
// let box = document.querySelector("#box");
// let childs = box.children;
// for (const child of childs) {
//     console.log(child.textContent)
// }

// 
// let bo

// 
// let box = document.querySelector("#box");
// console.log(box.firstChild.nodeType);

// 
// let box  = document.querySelector("#box");
// let first = box.firstElementChild;
// console.log(first.nodeType)

// 
// let box = document.querySelector("#box");
// let first = box.firstChild;
// console.log(first.nodeType)

// 
// let box = document.querySelector("#box");
// let ele = box.children;
// for (const node of ele) {
//     console.log(node.nodeType)
// }

let box = document.querySelector("#box");
let nodes = box.childNodes;
for (const node of nodes) {
    if(node.nodeType === 1){
        console.log("Element")
    }
    else if(node.nodeType === 3){
        console.log("Text")
    }
}