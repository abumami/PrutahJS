// To set up project, need to do:
// get axios and promise
// $ npm install axios promise --save

var axios = require('axios');
require('promise/polyfill-done');

function getRate (pair) {
    return axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22' + pair + '%22)&format=json&diagnostics=false&env=store://datatables.org/alltableswithkeys&callback=')
}

var helpers = {
    getRate: function (pair) {
        return getRate(pair)
        .then(function (value) {
                var rate = JSON.parse(value.data.query.results.rate.Rate);
                var amountToExchange = 0.00088184905;
                var prutahValue = rate * amountToExchange;
                return Math.ceil(prutahValue * 1000) / 1000;            
        })
        .catch(function (err) {
            console.warn('Error in getRate', err);
        })
    }
};

module.exports = helpers;
