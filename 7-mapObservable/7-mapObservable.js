/*
  Obserable is just like an array. In an array all of the data is stored in
  memory. Obserable no data is stored in memory, items arrive over time
  asynchronously.

  Think of events as first-class collections. This way we can use all of the
  methods we already know.
*/

var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e) {
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');




/*
  Asynchronous collection

  forEach() with Observables works differently

  With Observable, forEach() is waited for before any events are carried out.
  And when it's called, it promises that it will hook up an event listener.

  Just creating Observables causes nothing to happen, have to forEach over them.
*/
var points =
  clicks.map(function(e) {
    return {x: e.clientX, y: e.clientY};
  });

var subscription = points.forEach(
  function onNext(point) {
    alert('clicked:' + JSON.stringify(point));
    subscription.dispose();
  },
  function onError(error) {
    console.log('ERROR!');
  },
  function onCompleted(e) {
    console.log('done');
  });




/*
  Synchronous collection

  Can't do this with the above, arrays with forEach() always execute asynchronously.
  All of the data in the colleciton is already there, so no issues can occur
  after data is added at a later time.
*/
// try {
//   [1,2,3].forEach(function(i) {
//     console.log(i);
//   });
//
//   console.log("done");
// } catch (e) {
//   console.log("error");
// }
