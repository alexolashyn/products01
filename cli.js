const inquirer = require("inquirer");
const functions = require("./functions");
const {getProducts} = require("./product");

function getLastPrice(interestingProduct) {
    return interestingProduct.prices[interestingProduct.prices.length - 1];
}

function getFlagRepresentation(interestingProduct){
    return functions.getFlag(interestingProduct.prices[interestingProduct.prices.length-2], interestingProduct.prices[interestingProduct.prices.length-1]);
}

async function askUserForProduct(products) {
    try {
        const answer = await inquirer.prompt([
            {
                message: "Enter product name",
                name: "product_name",
                type: "input"
            },
        ]);
        console.log("Your answers: ", answer);
        const interestingProduct=products.find(
            (product) => product.product === answer.product_name
        );
        console.log("The product is found!");
        console.log("Last price: ");
        console.log(`${getLastPrice(interestingProduct)}\t${getFlagRepresentation(interestingProduct)}`);
    }catch(error){
        console.error("Something went wrong: ", error);
    }
}
askUserForProduct((getProducts()));