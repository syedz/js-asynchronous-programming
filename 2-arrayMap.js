function getStockSymbols(stocks) {
  return stocks.map(function(stock) {
    return stock.symbol;
  });
  /*
  var symbols = [];

  // forEach accepts a closure and then invokes that closure
  stocks.forEach(function(stock) {
    symbols.push(stock.symbol);
  });

  return symbols;
  */
}

// Below we've simply rewritten the map prototype function to showcase its
// functionality. Map() basically works almost the same way as forEach() does.
// We can simply remove it and everything will work.
// projection function just transform the item in the array into something else
Array.prototype.map = function (projection) {
  var results = [];

  // 'this' is in the context of the array that forEach() is called on
  this.forEach(function(item) {
    results.push(projection(item));
  });

  return results;
};

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23422 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));