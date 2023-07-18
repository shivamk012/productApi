const express = require('express');
const { initialiseApp } = require('./Promises/initialise');
const axios = require('axios');

const app = express();

app.get('/initialiseApp' , (req , res) => {
    initialiseApp.then((result) => {
        const processedData = result.data.map(obj => {
            const str = obj.dateOfSale.slice(5,7); // getting mongth of product
            return {category : obj.category , dateOfSale : str};
        })
        const putResult = axios.put('http://localhost:3005/data' , processedData);
        // putResult.then(response => res.send(response));
    }).catch((err) => {
        console.log(err);
    })
})

app.listen(3000 , () => {
    console.log("hello");
});