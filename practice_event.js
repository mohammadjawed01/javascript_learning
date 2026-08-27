// ----------------------simple pratice-----------------------
// 1
// let sec = document.querySelector("select");
// let heading = document.querySelector(".heading");
// sec.addEventListener('change', function(event){
//     heading.textContent = `${event.target.value} device selected`
//     // console.log(event.target.value)
// })

// 2
let h2 = document.querySelector('h2')
window.addEventListener('keydown', function(event){
    if(event.key === " "){
        h2.textContent = "SPC"
    }
    else{
        h2.textContent = event.key
    }
})