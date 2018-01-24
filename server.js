const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex('1GB5H5D1-Z3LPPS8A-YQQGS7UX-6EQYGPR7', 'b3a1b784119fe002fab31a1fd9363bb9cceac4a0f0514d4800d7aef7ea5e8a0b79448c6dc942391d9c37b605e8b4c63b968fdcff2111fa83ac736da643799b92');

var currentBid;
var currentAsk;
var dayAvg;
var twentyFourHoursAgo = ((Date.now() - (1000 * 60 * 60 * 24)) / 1000) - 1;
var timeNow = Math.round(Date.now() / 1000) - 1;
var diff1;
var diff2;
var currentBalance;

poloniex.returnTicker().then((ticker) => {
  console.log(ticker.BTC_ETH);
  currentBid = ticker.BTC_ETH.highestBid;
  currentAsk = ticker.BTC_ETH.lowestAsk;
}).catch((err) => {
  console.log(err.message);
});


poloniex.returnChartData('BTC_ETH', 86400, twentyFourHoursAgo, timeNow).then((chartData) => {
	console.log("AVG:", chartData[0].weightedAverage);
	dayAvg = chartData[0].weightedAverage;
}).catch((err) =>{
	console.log(err.message);
})

diff1 = dayAvg - currentAsk;
diff2 = currentBid - dayAvg;

poloniex.returnBalances().then((balances) => {
  console.log(balances.BTC);
  currentBalance = balances.BTC
}).catch((err) => {
  console.log(err.message);
});

if (diff1 > .018){
	console.log("good time to buy");
	poloniex.buy('BTC_ETH', currentAsk, currentBalance/4).then(response) => {
		console.log("just bought")
	}
} else if (diff2 > .018){
	console.log("good time to sell");
	poloniex.sell('BTC_ETH', currentAsk, currentBalance/4).then(response) => {
		console.log("just bought")
	}
} else {
	console.log("maintain position");
}

