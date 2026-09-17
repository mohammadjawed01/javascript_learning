let input = document.querySelector("input");

function debouncing(fnc, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        }, delay)
    }
}

input.addEventListener('input', debouncing(function () {
    console.log("hey");
}, 1000)
);