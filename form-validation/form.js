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
let input = document.querySelector("input");
input.addEventListener('change', function(e) {
    console.log(input.value)
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