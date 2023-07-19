const {getProducts} = require('./getProducts');

const barChartData = async(month) => {
    const res = await getProducts;
    
    let arr = new Array(10).fill(0);

    res.data.products.forEach((obj) => {
        if(obj.month === month){
            let index = parseInt(obj.price/100);
            index = index > 9 ? 9 : index;
            arr[index] += 1;
        }
    })

    let finalRange = arr.map((element , index) => {
        let lowLimit = (index === 0 ? 0 : index*100 + 1);
        let upperLimit = (index === 9 ? "above" : (index+1)*100)
        return {
            range : `${lowLimit} - ${upperLimit}`,
            count: element
        }
    })

    return finalRange;
}

module.exports = {barChartData}