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
let btn = document.querySelector("#btn");
let count = document.querySelector("#count");
let number = 0;
btn.addEventListener('click', function(){
    number++;
    count.textContent = number;
})