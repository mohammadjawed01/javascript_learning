let btn = document.querySelector("#btn");
let page = document.querySelector("#page")
btn.addEventListener("click", function(){
    page.classList.toggle("dark")
    console.log(btn)
    console.log(page)
})