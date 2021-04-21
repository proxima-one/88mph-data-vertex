//source
//type
//audit
//events
//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
};

npm install coingecko-api
https://github.com/miscavage/CoinGecko-API

let data = await CoinGeckoClient.simple.price({
    ids: ['bitcoin', 'ethereum'],
    vs_currencies: ['eur', 'usd'],
});

let data = await CoinGeckoClient.simple.supportedVsCurrencies();


let data = await CoinGeckoClient.exchanges.fetch('binance');

let data = await CoinGeckoClient.exchanges.all();

 https://www.coingecko.com/api/docs/v3#/exchanges_(beta)/get_exchanges


coins.fetch()

let data = await CoinGeckoClient.coins.fetch('bitcoin', {});

let data = await CoinGeckoClient.coins.markets();

coins.all()

let data = await CoinGeckoClient.coins.all();

{
    success: Boolean,
    message: String,
    code: Number,
    data: Object
}
