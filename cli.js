const inquirer = require("inquirer");
const functions = require("./functions");
const {getProducts} = require("./product");
const {loadPrice} = require("./loadPageProducts");

function getLastPrice(interestingProduct) {
    return interestingProduct.prices[interestingProduct.prices.length - 1];
}

function getFlagRepresentation(interestingProduct) {
    return functions.getFlag(interestingProduct.prices[interestingProduct.prices.length - 2], interestingProduct.prices[interestingProduct.prices.length - 1]);
}

async function askUserForProduct(products) {
    try {
        const answer = await inquirer.prompt([
            {
                name: "Action",
                message: "Choose an action",
                type: "list",
                choices: [
                    {
                        name: "Load price of product from page",
                        value: ACTION_LOAD_PRICE,
                    },
                    {
                        name: "Give products from page",
                        value: ACTION_PRODUCT_STATUS,
                    }
                ],
            },
            {
                when: ({action}) => action === ACTION_LOAD_PRICE,
            },
            {
                message: "Input product name",
                name: "product_name",
                when: ({action}) => action === ACTION_PRODUCT_STATUS,
            },
        ]);
        switch (answer.action) {
            case ACTION_LOAD_PRICE:
                const new_product = await loadPrice();
                console.log(new_product);
                break;
            case ACTION_PRODUCT_STATUS:
                const insertingProduct = products.find(
                    (product) => product.product === answer.product_name
                );
        }

    } catch (error) {
        console.error("Something went wrong: ", error);
    }
}

askUserForProduct((getProducts()));