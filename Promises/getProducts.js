const axios = require('axios');

const getProducts = new Promise((resolve , reject) => {
    const products = axios.get('http://localhost:3005/data/products'); // returns list of all products saved in database

    products.then((result) => resolve(result)).catch(err => reject(err));
})

module.exports = {getProducts};