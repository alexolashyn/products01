const {
    NO_FLAG,
    FLAG_PRICE_HUGE_DECREASE,
    FLAG_PRICE_DECREASE,
    FLAG_PRICE_INCREASE,
    FLAG_ERROR
} = require('./constants');
const functions = require('./functions');
const {getProducts} = require('./product');

const products = getProducts();
function  logProductsWithDiscount() {
    for(let p of products){
        p.flag=functions.getFlag(p.prices[p.prices.length-2], p.prices[p.prices.length-1]);
    }
    const productsForNotifications=[];
    for(let p of products){
        switch(p.flag){
            case FLAG_PRICE_HUGE_DECREASE:
                productsForNotifications.push(p);
                break;
            case FLAG_PRICE_DECREASE:
                productsForNotifications.push(p);
                break;
            case FLAG_PRICE_INCREASE:
                break;
            case FLAG_ERROR:
                break;
            case NO_FLAG:
                break;
        }
    }
    for(let i=0;i<productsForNotifications.length;i+=1){
        console.log(productsForNotifications[i]);
    }
}
logProductsWithDiscount();

