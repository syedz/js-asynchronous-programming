/*
  Observable is just like an array. In an array all of the data is stored in
  memory. Obserable no data is stored in memory, items arrive over time
  asynchronously.

  They are not stored in memory anywhere.

  Events, and asynchronous requests, and animations can all be modeled as
  asynchronous collections that arrive over time.

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




/*
  Asynchronous collection

  forEach() with Observables works differently. Try/catch doesn't work here.
*/
var clicks = Observable.fromEvent(button, 'click');

var subscription = clicks.forEach(
  function onNext(e) {
    alert('clicked');
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
