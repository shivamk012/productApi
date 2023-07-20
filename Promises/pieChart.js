const {getProducts} = require('./getProducts');

const pieChartData = async(month) => {
    const res = await getProducts;
    
    let mp = new Map();

    res.data.products.forEach(element => {
        if(element.month === month){
            if(mp.has(element.category)){
                mp.set(element.category , mp.get(element.category)+1);
            }else{
                mp.set(element.category , 1);
            }
        }
    })


    let arr = [];
    mp.forEach((value,key) => {
        arr.push({
            Category : key,
            TotalItems :value
        })
    })

    return arr;
}

module.exports = {pieChartData}