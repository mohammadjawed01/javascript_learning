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

let selected = document.querySelector('input[name="gender"]:checked');
if (selected) {
    console.log(selected.value);
}


