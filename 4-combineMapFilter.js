/*
  Loops are no good with data is that arriving asynchronously like events or
  server calls. By using forEach(), map(), filter() we can build complex
  functions that work with data that arrives asynchronously or synchronously.

  Both map() and filter() don't change arrays, they create new arrays.
*/

var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23422 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

var filteredStockSymbols =
  stocks
    .filter(function(stock) {
      // Predicate function that accepts an item and returns true or false.
      return stock.price >= 150.00;
    })
    .map(function(stock) {
      // Projection function that transforms a value that comes in into a new value.
      return stock.symbol;
    });

filteredStockSymbols.forEach(function(symbol) {
  console.log(symbol);
});
