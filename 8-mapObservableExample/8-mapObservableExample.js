var Observable = Rx.Observable;

var parent = document.getElementById("parent");
var widget = document.getElementById("widget");

var mouseDowns = Observable.fromEvent(widget, "mousedown");
var parentMouseMoves = Observable.fromEvent(parent, "mousemove");
var parentMouseUps = Observable.fromEvent(parent, "mouseup");

// var stocks =
//   exchanges.
//     map(function(exchange) {
//       return exchange.stocks.
//         filter(function(stock) { return stock.price >= 100.00; });
//     }).
//     concatAll();

// Create a stream of drags
var drags =
  mouseDowns.
    map(function(e) {
      return parentMouseMoves.
        takeUntil(parentMouseUps);
    }).
    concatAll();

// Use concatAll() to avoid nesting 2 forEach()
var subscription =
  drags.forEach(
    function onNext(e) {
      console.log(e.clientX);
      console.log(e.clientY);
      widget.style.left = e.clientX + "px";
      widget.style.top = e.clientY + "px";
    },
    function onError(error) {
      console.log('error');
    },
    function onCompleted() {

    });