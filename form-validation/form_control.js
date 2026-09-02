// 
// let terms = document.querySelector("#terms");
// console.log(terms.checked);

// 
// let terms = document.querySelector("#terms");
// terms.addEventListener('change', ()=> {
//     console.log(terms.checked);
// })

// RADIO BUTTON
// let male = document.querySelector("#male");
// console.log(male.checked)

// let selected = document.querySelector('input[name="gender"]:checked');
// if (selected) {
//     console.log(selected.value);
// }

// SELECT/DROPDOWN
// let city = document.querySelector("#city");
// // console.log(city.value)
// // let selectedOption = city.options[city.selectedIndex];
// // console.log(selectedOption);
// city.addEventListener('change', function(e){
//     console.log(city.value)
// })


// CHECKBOX + FORM EXAMPLE
// let form = document.querySelector("form");
// let username = document.querySelector("#username");
// let terms = document.querySelector("#terms");

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     if(username.value === ""){
//         alert("plz fill the username")
//         return
//     }

//     if(!terms.checked){
//         alert("PLease accept the terms");
//         return;
//     }
//     alert("Registratioin Successful");
// })

// RADIO + FORM EXAMPLE

// let form = document.querySelector("form");
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     let selected = document.querySelector('input[name="plan"]:checked');

//     if (!selected) {
//         alert("please select a plan");
//         return
//     }

//     alert("selected value")
// })


// 
// let form = document.querySelector("form");
// let terms = document.querySelector("#terms")
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     if (!terms.checked) {
//         console.log("Please accept the terms") 
//         return;       
//     }

//     console.log("Terms accepted")
// })

// 
// let form = document.querySelector("form");
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     let selected  = document.querySelector('input[name="plan"]:checked');
//     if(!selected){
//         console.log("No plan selected")
//     } 
//     console.log(selected.value);
// })

// 
let city = document.querySelector("#city");
city.addEventListener('change', function(e){
    e.preventDefault();
    console.log(city.value)
    console.log(city.selectedIndex)
})

// 
let form = document.querySelector("#form");
form.addEventListener('submit', function(e){
    e.preventDefault()

    let selected = document.querySelector('input[name="skill"]:checked');

    if(!selected){
        console.log("please select a skill")
        return;
    }
    console.log(selected.value);
})


