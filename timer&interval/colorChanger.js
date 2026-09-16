let changeBgColor = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;
let startChangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(chnageRandomColor, 1000);
    }
    function chnageRandomColor() {
        document.body.style.backgroundColor = changeBgColor();
    }
}
let stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector("#stop").addEventListener('click', stopChangingColor);