const {
    NO_FLAG,
    FLAG_PRICE_HUGE_DECREASE,
    FLAG_PRICE_DECREASE,
    FLAG_PRICE_INCREASE,
    FLAG_ERROR
} = require('./constants');

function getFlag(previous_price, last_price) {
    if (previous_price > last_price) {
        if (getHowHugeDecrease(previous_price, last_price)) {
            return FLAG_PRICE_HUGE_DECREASE;
        } else {
            return FLAG_PRICE_DECREASE;
        }
    }
    return FLAG_PRICE_INCREASE;
}

function getHowHugeDecrease(previous_price, last_price) {
    return previous_price - last_price > 0.1 * previous_price;
}


module.exports = {
    getFlag,
    getHowHugeDecrease
};