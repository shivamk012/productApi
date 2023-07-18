const axios = require('axios');

const initialiseApp = new Promise(async(resolve , reject) => {
    const response = axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

    response.then(res => {
        resolve(res);
    }).catch(err => {
        reject(err);
    })
})

module.exports = {initialiseApp};