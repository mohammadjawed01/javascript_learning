let input = document.querySelector("input");

function throttle(fnc, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now();
        clearTimeout(timer);
        if(now - timer >= delay){
            timer = now
            fnc(...args)
        }
    };
}

input.addEventListener('input', throttle(function () {
    console.log("hey");
}, 1000)
);