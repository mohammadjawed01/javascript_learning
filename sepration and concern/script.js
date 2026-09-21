let btn = document.querySelector("button");
let ul = document.querySelector("ul");


function add(n1, n2){
    return n1 + n2;
}
btn.addEventListener('click', function () {
    let numb1 = Math.floor(Math.random() * 10)
    let numb2 = Math.floor(Math.random() * 10)

    let sum = add(numb1, numb2);

    let li = document.createElement("li");

    li.textContent = sum;

    ul.appendChild(li);
})