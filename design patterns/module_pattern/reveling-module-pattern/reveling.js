// iife = imediately invoked function expression by reveling module pattern
let Bank = (function () {
    let bankBalance = 12000;

    function checkBalance() {
        console.log(bankBalance);
    }

    function setBalance(val){
        bankBalance = val;
    }

    function withdraw(val){
        if(val<=bankBalance){
            bankBalance -= val;
            console.log(bankBalance)
        }
    }

    return {
        check: checkBalance,
        set: setBalance,
        draw: withdraw,
    }
})()
