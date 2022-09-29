'use strict';

//contains jsx
console.log('app.js is running');

var count = 0;
var addOne = function addOne() {
  console.log('added one');
};
var minusOne = function minusOne() {
  console.log('subtracted one');
};
var reset = function reset() {
  console.log('reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count:',
    count
  ),
  React.createElement(
    'button',
    { id: 'my-id', className: 'button', onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

console.log(templateTwo);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
