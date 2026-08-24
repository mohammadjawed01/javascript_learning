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
let btn = document.querySelector("#btn");
function handleClick(){
    console.log("button clicked")
}
// btn.onclick = handleClick(); this execute the function write now 
btn.onclick = handleClick;