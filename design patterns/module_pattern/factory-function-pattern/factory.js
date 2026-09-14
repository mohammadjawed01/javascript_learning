let createProduct = function(name, price){
    let stock = 10;
    return {
        name,
        price,
        checkstock(){
            console.log(stock);
        },

        buy(qty){
            if(qty<= stock){
                stock -= qty;
                console.log(`${qty} pieces booked, remaining stock is ${stock}`);
            }

            else{
                console.error(`sorry, only ${stock} pices are avaiable`)
            }
        },

        refill(qty){
            stock += qty;
            console.log(`Stock refilled, current stock is ${stock}`);
        },
    };
}

let iphone = createProduct("iphone", 70000);
