'use strict';

var visibility = false;
var showDetails = function showDetails() {
    console.log('clicked');
    visibility = !visibility;

    // return <p>here are the details</p>
    // ReactDOM.render(template, appRoot);
    renderPage();
};

var renderPage = function renderPage() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: showDetails },
            visibility ? 'hide details' : 'show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'here are your details'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderPage();
