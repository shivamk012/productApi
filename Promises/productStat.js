const {getProducts} = require('./getProducts');

const statsPromise = async(month) => {
    const res = await getProducts;
    let totalSale = 0.0, countSold = 0, countUnSold = 0 ;
    res.data.products.forEach(obj => {
        if(obj.sold){
            totalSale += parseFloat(obj.price);
            countSold += 1 ;
        }
        else countUnSold += obj.sold ? 0 : 1;
    });
    return {totalSale , countSold , countUnSold};
}

module.exports = {statsPromise}