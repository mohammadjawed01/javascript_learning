// ----------------------simple pratice-----------------------
// 1
// let sec = document.querySelector("select");
// let heading = document.querySelector(".heading");
// sec.addEventListener('change', function(event){
//     heading.textContent = `${event.target.value} device selected`
//     // console.log(event.target.value)
// })

// 2
// let h2 = document.querySelector('h2')
// window.addEventListener('keydown', function(event){
//     if(event.key === " "){
//         h2.textContent = "SPC"
//     }
//     else{
//         h2.textContent = event.key
//     }
// })

// 3
// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");
// btn.addEventListener('click', function(){
//     fileinp.click();
// })
// fileinp.addEventListener('change', function(event){
//     let file = event.target.files[0]
//     if(file){
//         btn.textContent = file.name;
//     }
//     else {
//         btn.textContent = "Upload file";
//     }
// })

// 4
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main")

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value)

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value
    let p = document.createElement("p");
    p.textContent = inputs[3].value

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)
    main.appendChild(card)

    inputs.forEach(function(inp){
        if (inp.type !== "submit") {
            inp.value = "";
        }
    })

})