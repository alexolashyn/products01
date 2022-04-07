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

console.log(products[0]);

