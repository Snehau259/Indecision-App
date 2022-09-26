'use strict';

//contains jsx
console.log('app.js is running');
// var template= <p>This is template from app.js</p>
// var template = (<div><p> This is template from app.js</p> <h1> hello</h1><p>okbie</p> </div>);
var userName = 'Sneha U';
var userAge = 21;
var userLocation = 'India';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName
  ),
  React.createElement(
    'p',
    null,
    'Age:',
    userAge
  ),
  React.createElement(
    'p',
    null,
    'Location:',
    userLocation
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
