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
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");
btn.addEventListener('click', function(){
    fileinp.click();
})
fileinp.addEventListener('change', function(event){
    let file = event.target.files[0]
    if(file){
        btn.textContent = file.name;
    }
    else {
        btn.textContent = "Upload file";
    }
})