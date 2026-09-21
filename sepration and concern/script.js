let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener('click', function () {
    let numb1 = Math.floor(Math.random() * 10)
    let numb2 = Math.floor(Math.random() * 10)

    let add = numb1 + numb2;

    let li = document.createElement("li");

    li.textContent = add;

    ul.appendChild(li);
})