const express = require('express');
const routes = express.Router();

routes.get('/', (req,res) => {
    /*Product.create({
        title: "React native",
        description: "Desenvolvimento com react",
        url: "http://github.com/facebook/react-native",
    });
*/
    return res.send("teste!123");
});

module.exports = routes;