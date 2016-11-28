function getStockSymbols(stocks) {
  // var symbols = [],
  //     counter,
  //     stock;

  // for() is synchronous
  // for (counter = 0; counter < stocks.length; counter++) {
  //   stock = stocks[counter];
  //   symbols.push(stock.symbol);
  // }

  var symbols = [];

  // forEach() is asynchronous
  // forEach accepts a closure and then invokes that closure
  stocks.forEach(function(stock) {
    symbols.push(stock.symbol);
  });

  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23422 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));