// settimeout
// let timeout = setTimeout(function(){
//     alert("hello");
// },2000)

// cleartimeout
// clearTimeout(timeout)

//setinterval
// let interval = setInterval(function(){
//     alert("hey")
// },3000);

// clearinterval
// clearInterval(interval);

// counter
// let count = 10;
// let int = setInterval(function(){
//     if(count>=0){
//         console.log(count)
//         count--;
//     }
//     else{
//         clearInterval(int);
//     }
// },2000)

// download bar
let progress = document.querySelector(".progress-bar")
let percent = document.querySelector(".percent")
let count = 0;
let intv = setInterval(function () {
    if (count < 100) {
        count++;
        progress.style.width = `${count}%`
        percent.textContent = `${count}%`
    }
    else{
        document.querySelector("h2").textContent = "Downloaded.";
        clearInterval(intv)
    }
}, 1000 / 10)