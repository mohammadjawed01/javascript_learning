// let btn = document.querySelector("#btn");
// let page = document.querySelector("#page")
// btn.addEventListener("click", function () {
//     page.classList.toggle("dark")
//     console.log(btn)
//     console.log(page)
// })

// 1
// let btn = document.querySelector("#btn");
// btn.addEventListener('click', function(){
//     alert("button clicked!")
// })

// 2
// let btn = document.querySelector("#btn");
// btn.addEventListener('click', function(){
//     console.log("Button Clicked")
// })


//-------------------------------------ONCLICK-----------------------------------

// 1.
// let btn = document.querySelector("#btn");
// btn.onclick = function(){
//     alert("button clicked")
// }

// 2.
// let btn = document.querySelector("#btn");
// function handleClick(){
//     console.log("button clicked")
// }
// btn.onclick = handleClick(); this execute the function write now 
// btn.onclick = handleClick;

//-------------------------------------AddEventListener-----------------------------------
// 1.
// let btn = document.querySelector("#btn");
// btn.addEventListener('click', function(){
//     console.log("Button clicked successfully!")
// })

// 2.
// let btn = document.querySelector("#btn");
// let p = document.querySelector("#message")
// p.addEventListener('click', function(){
//     p.textContent = "Clicked!"
// })

// 3.
// let btn = document.querySelector("#btn")
// btn.addEventListener('click', function(){
//     btn.textContent = "Clicked!"
// })

// 4.
// let btn = document.querySelector("#btn")
// btn.addEventListener('click', function(){
//    console.log("First");
// })
// btn.addEventListener('click', function(){
//     console.log("Second");
// })

// 5. 
// let btn = document.querySelector("#btn");
// let box = document.querySelector("#box")
// btn.addEventListener('click', function(){
//     box.style.backgroundColor = "red"
// })

// 6.
// let btn = document.querySelector("#btn");
// let para = document.querySelector("#para");
// btn.addEventListener('click', function(){
//     para.style.display = "none"
// })

// 7.
// let btn = document.querySelector("#btn");
// let ul = document.querySelector("#skills")
// btn.addEventListener('click', function(){
//      let li = document.createElement("li");
//      li.textContent = "JavaScript"
//     ul.append(li)
// })

// 8.
// let btn = document.querySelector("#btn");
// let count = document.querySelector("#count");
// let number = 0;
// btn.addEventListener('click', function(){
//     number++;
//     count.textContent = number;
// })

// 9.
// let box = document.querySelector("#box");
// box.addEventListener('mouseenter', function(){
//     console.log("Mouse entered")
// })

// 10.
// let btn = document.querySelector("#btn");
// btn.addEventListener('dblclick', function(){
//     console.log("Double Clicked!")
// })

// 11.
// let box = document.querySelector("#box");
// box.addEventListener('mouseenter', function(){
//     console.log("Mouse entered")
// })
// box.addEventListener('mouseleave', function(){
//     console.log("Mouse leaved")
// })

// 12.
// let btn = document.querySelector("#btn");
// btn.addEventListener("mousedown", function () {
//     console.log("A");
// });
// btn.addEventListener("mouseup", function () {
//     console.log("B");
// });
// btn.addEventListener("click", function () {
//     console.log("C");
// });

// -------------------------KeyboardEvent---------------------
//13
// document.addEventListener("keydown", function () {
//     console.log("Key pressed");
// });

//14
// document.addEventListener("keyup", function () {
//     console.log("Key released");
// });

// 15
// let input = document.querySelector("input");
// input.addEventListener('keydown', function(){
//     console.log("key pressed inside input")
// })

//16
// document.addEventListener('keydown', function (event) {
//     console.log(event.key);
// });

// 17
// document.addEventListener('keydown', function (event) {
//     console.log(event.code);
// });

// 18
// document.addEventListener("keydown", function(event){
//     if(event.key === "ArrowUp"){
//         console.log("Move  up")
//     }
// })

// 19
// let search = document.querySelector("input");
// search.addEventListener("keydown", function(event){
//     if(event.key === "Enter"){
//         console.log("search")
//     }
// })

// 20
document.addEventListener("keydown", function (event) {
    // console.log(event.shiftKey)
})

// 21
document.addEventListener("keydown", function (event) {
    // console.log(event.ctrlKey)
})

// 22
document.addEventListener("keydown", function (event) {
    // console.log(event.altKey)
})

// 23
document.addEventListener("keydown", function (event) {
    // console.log(event.metaKey)
})

//24
// document.addEventListener("keydown", function (event) {
//     if (event.ctrlKey && event.key === "s") {
//         console.log("ctrl + s")
//     }
//     else if (event.ctrlKey && event.key === "Enter") {
//         console.log("ctrl + enter")
//     }
//     else if (event.altKey && event.key === "Enter") {
//         console.log("alt + enter")
//     }

//     else if (event.shiftKey && event.key === "a") {
//         console.log("shift + A")
//     }
// })

// 25
// document.addEventListener("keydown", function (event) {
//     if (event.shiftKey && event.key === "a") {
//         console.log("shift pressed")
//     }
// });

// 26
// document.addEventListener("keydown", function (event) {
//     if (event.ctrlKey && event.key === "s") {
//         console.log("ctrl + s pressed")
//     }
// });

// 27
// document.addEventListener("keydown", function (event) {
// if (event.altKey && event.key === "Enter") {
//         console.log("Alt + Enter pressed")
//     }
// });

// ------------------preventDefault-----------------------

//28
// let link = document.querySelector("#link");
// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("link clicked")
// })

// 29
// let form =  document.querySelector("#form");
// form.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("form subnmission stopped")
// })

// 30
// let link = document.querySelector("#link");
// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("Navigation prevented");
// })

// 31
// let form = document.querySelector("#form");
// let button = document.querySelector("button")
// button.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("Form submitted using JavaScript");
// })

// 32
// let btn  = document.querySelector("#btn");
// btn.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("Button action controlled");
// })

// -------event propogation bubbling and capturing-------
// 32
// let grandparent = document.querySelector("#grandparent");
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// grandparent.addEventListener('click', function(){
//     console.log("Grandparent")
// })
// parent.addEventListener('click', function(){
//     console.log("Parent")
// })
// child.addEventListener('click', function(){
//     console.log("Child")
// })

// 33
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// parent.addEventListener('click', function(){
//     console.log("Parent")
// }, true)
// child.addEventListener('click', function(){
//     console.log("Child")
// })

//34
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// parent.addEventListener('click', function(){
//     console.log("parent")
// })
// child.addEventListener('click', function(event){
//     console.log("Child clicked");
//     event.stopPropagation();
// })

// 35
// let grandparent = document.querySelector("#grandparent");
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// grandparent.addEventListener('click', function(){
//     console.log("grandparent")
// })
// parent.addEventListener('click', function(){
//     console.log("parent");
// })
// child.addEventListener('click', function(){
//     console.log("Child");
// })

// 36
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");
// parent.addEventListener('click', function(){
//     console.log("parent");
// }, true)
// child.addEventListener('click', function(){
//     console.log("Child");
// })

// -----------------------Event Delegation-----------------
// 37
// let skills = document.querySelector("#skills");
// skills.addEventListener('click', function(event){
//     console.log(event.target.textContent)
// })

// 38
// let box = document.querySelector("#box");
// box.addEventListener('click', function(event){
//     console.log(event.target);
// })

//39
// let box = document.querySelector("#box");
// box.addEventListener('click', function(event){
//     console.log(event.target);
//     console.log(event.currentTarget);
// })

// 40.
// let buttons = document.querySelector("#buttons");
// buttons.addEventListener('click', function() {
//     console.log("Button clicked")
// })

// 41
// let tasks = document.querySelector("#tasks");
// tasks.addEventListener('click', function(event){
//     if(event.target.matches("button")){
//         event.target.parentElement.remove()
//     }
// })

// -----------------remove Elements---------------------
//42
// let btn = document.querySelector("#btn");
// function handleClick(){
//     console.log("Button clicked")
// }
// btn.addEventListener('click', handleClick);
// btn.removeEventListener('click', handleClick);

// 43
// let btn = document.querySelector("#btn");
// function firstHandler(){
//     console.log("First Handler")
// }
// function secondHandler(){
//     console.log("Second Handler")
// }
// btn.addEventListener('click', firstHandler);
// btn.addEventListener('click', secondHandler);
// btn.removeEventListener('click', firstHandler);

// 44
// function handleKeydown(event) {
//     console.log("key pressed");
// }
// document.addEventListener("keydown", handleKeydown);
// document.removeEventListener("keydown", handleKeydown);

// ---------------event object and event properties-----------
// 45
// let btn = document.querySelector("#btn");
// btn.addEventListener('click', function(event){
//     console.log(event);
// })

// 46
// let btn = document.querySelector("#btn");
// btn.addEventListener('click', function(event){
//     console.log(event.type);
// })

// 47
// let btn = document.querySelector("#btn");
// btn.addEventListener('click', function(event){
//     console.log(event.target);
// })

// 48
// let box = document.querySelector("#box");
// box.addEventListener('click', function(event){
//     console.log(event.currentTarget);
// })

// 49
// let btn = document.querySelector("#btn");
// document.addEventListener('click', function(event){
//     console.log(event.clickX);
//     console.log(event.clickY);
// })

// 50
// document.addEventListener('click', function (event) {
//     console.log(event.clientX)
//     console.log(event.clientY)
// })

// 51
// document.addEventListener('click', function (event) {
//     console.log(event.pageX)
//     console.log(event.pageY)
// })

// 52
// let box = document.querySelector("#box")
// box.addEventListener("mousedown", function (event) {
//     console.log(event.button);
// });

// 53
// document.addEventListener("keydown", function (event) {
//     console.log(event.repeat);
// });

//54
// document.addEventListener("keydown", function(event){
//     console.log(`Key pressed: ${event.key}`)
// })

// 55
// document.addEventListener("keydown", function(event){
//     if (event.ctrlKey && event.key === 's') {
//         console.log("Ctrl + S detected");
//     }
// });

// 56
// document.addEventListener("mousedown", function(event){
//     console.log(event.clientX)
//     console.log(event.clientY)
// })

// ----------------------simple pratice-----------------------
// 1
let sec = document.querySelector("select");
let heading = document.querySelector(".heading");
sec.addEventListener('change', function(event){
    heading.textContent = `${event.target.value} device selected`
    // console.log(event.target.value)
})