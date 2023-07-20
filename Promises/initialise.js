const axios = require('axios');

const initialiseApp = new Promise(async(resolve , reject) => {
    //call to external api , returns data 
    const response = axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

    response.then(res => {
        resolve(res); // if success then send data
    }).catch(err => {
        reject(err); // if rejected then send err
    })
})

module.exports = {initialiseApp};