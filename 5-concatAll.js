/*
  Can flatten nested data structures so we can transform them further
*/

var exchanges = [
  [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 }
  ],
  [
    { symbol: "JXJ", price: 120.22, volume: 5323 },
    { symbol: "NYN", price: 88.47, volume: 98275 }
  ]
];

// Run concatAll() on a nested array, and it creates a new array of flatten results
// Flatten only by 1 dimension
Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });

  return results;
};

// console.log(JSON.stringify(exchanges));

var stocks = exchanges.concatAll()
stocks.forEach(function(stock) {
  console.log(JSON.stringify(stock));
});

/*
exchanges.forEach(function(exchange) {
  exchange.forEach(function(stock) {
    console.log(JSON.stringify(stock));
  });
});
*/