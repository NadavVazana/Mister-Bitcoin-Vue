import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
    }

    
 function getRate(){
    return   axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    
} 

function getMarketPriceHistory(){
    return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
}


function getAvgBlockSize(){
    return axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
}