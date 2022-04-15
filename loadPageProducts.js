const {default: axios} = require("axios");
const cheerio = require("cheerio");
const {data} = require("cheerio/lib/api/attributes");
module.exports={
    loadPrice:() => {
    return axios
        .get(
            `https://allo.ua/ua/products/mobile/apple-iphone-11-64gb-black-mhda3-slim-box.html`
        )
        .then((response) => {
            console.log(response.status);
            const dom = cheerio.load(response.data);
        })


}
}


