const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex('1GB5H5D1-Z3LPPS8A-YQQGS7UX-6EQYGPR7', 'b3a1b784119fe002fab31a1fd9363bb9cceac4a0f0514d4800d7aef7ea5e8a0b79448c6dc942391d9c37b605e8b4c63b968fdcff2111fa83ac736da643799b92');
 
// poloniex.returnTicker().then((ticker) => {
//   console.log(ticker.BTC_ETH);
// }).catch((err) => {
//   console.log(err.message);
// });

// poloniex.returnBalances().then((balances) => {
//   console.log(balances.BTC);
  
// }).catch((err) => {
//   console.log(err.message);
// });

var twentyFourHoursAgo = Date.now() - (1000 * 60 * 60 * 24);
var timeNow = Date.now()

poloniex.returnChartData('BTC_ETH', 14400, 1405699200, 9999999999).then((chartData) => {
	console.log("Chart Data:", chartData);
}).catch((err) =>{
	console.log(err.message);
})

