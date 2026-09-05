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
let count = 10;
let int = setInterval(function(){
    if(count>=0){
        console.log(count)
        count--;
    }
    else{
        clearInterval(int);
    }
},2000)