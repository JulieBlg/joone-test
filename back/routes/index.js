const request = require('request');
const queryString = require('query-string');

const apiKey = process.env.API_KEY;
const apiSecretKey = process.env.API_SECRET_KEY;
const shop = process.env.SHOP;

const appRouter = app => {
    app.get("/products", (req, res) => {
        const query = queryString.stringify(req.query);

        request({
            uri: `https://${apiKey}:${apiSecretKey}@${shop}/products.json?${query}`,
        }).pipe(res);
    });
}

module.exports = appRouter;