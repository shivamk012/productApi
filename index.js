const express = require('express');
const axios = require('axios');
const { initialiseApp } = require('./Promises/initialise');
const {statsPromise} = require('./Promises/productStat');
const {barChartData} = require('./Promises/barChart');
const {pieChartData} = require('./Promises/pieChart');

const app = express();

app.get('/initialiseApp' , (req , res) => {

    initialiseApp.then((result) => {
        //result contains data from external api

        const processedData = result.data.map((obj , index) => {
            const month = obj.dateOfSale.slice(5,7); // date format -> yyyy-mm-dd 
            return {
                 id : index , category : obj.category , month : month , price : obj.price , sold : obj.sold
            };
        })

        // sending data to database  
        const putResult = axios.put('http://localhost:3005/data/products' , {id: "products" , products : processedData} , {
            headers: {
            'Content-Type': 'application/json'
        }},);


        putResult.then((ans) => res.send(ans.data)).catch(err => res.send(err));
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/getData/:month' , async(req , res) => {
    //params contain value of id
    let {month} = req.params;
    if(month.length === 1) month = "0" + month;
    let pieChart = '' , stats = '' , barChart = ''; 
    pieChart = await pieChartData(month);
    stats = await statsPromise(month);
    barChart = await barChartData(month);

    
    res.send({
        pieChart,
        statistics : stats,
        barChart
    })
})

app.get('/statistics/:month' , (req , res) => {
    //params contain value of id
    let {month} = req.params;
    if(month.length === 1) month = "0" + month;
    statsPromise(month).then(result => res.send(result));
})

app.get('/piechart/:month' , (req , res) => {
    //params contain value of id
    let {month} = req.params;
    if(month.length === 1) month = "0" + month;
    pieChartData(month).then(result => res.send(result));
})

app.get('/barchart/:month' , (req , res) => {
    //params contain value of id
    let {month} = req.params;
    if(month.length === 1) month = "0" + month;
    barChartData(month).then(result => res.send(result));
})

app.listen(4000 , () => {
    console.log("app started");
}); // app started on port 3000