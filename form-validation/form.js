// 
// let form = document.querySelector("form");
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log("form submitted")
// })

// getting input value
// let username =  document.querySelector("#username");
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log(username.value)
// })

// input event
// let input = document.querySelector("input");
// input.addEventListener('change', function(e) {
//     console.log(input.value)
// })

// focus event
// let input = document.querySelector("input");
// input.addEventListener('focus', function() {
//     console.log("input focused")
// })

// blur event
// let input = document.querySelector("input");
// input.addEventListener('blur', function() {
//     console.log("input lost focus")
// })

//focus and blur validation
// let email = document.querySelector("#email");
// email.addEventListener('blur', function(){
//     if(email.value === ""){
//         console.log("email is required")
//     }
// })

//focus method
    // let username = document.querySelector("#username");
    // username.focus()

// form validation
let username = document.querySelector("#username");
form.addEventListener('submit', function(e){
    e.preventDefault();
    if (username.value === "") {
        console.log("username required");
        return;
    }
    console.log("form is valid")
})

// 
// let nm = document.querySelector("#name");
// let form = document.querySelector("form");
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display = "initial"
//     }
//     else{
//         document.querySelector("#hide").style.display = "none"
//     }
// })