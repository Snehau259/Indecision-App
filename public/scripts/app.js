'use strict';

//contains jsx
console.log('app.js is running');

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('added one', count);
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    console.log('subtracted one');
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    console.log('reset');
    renderCounterApp();
};

// console.log(templateTwo)
var appRoot = document.getElementById('app');

function renderCounterApp() {
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
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
