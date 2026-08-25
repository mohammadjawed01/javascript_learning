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
let search = document.querySelector("input");
search.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        console.log("search")
    }
})