"use strict";

//contains jsx
console.log('app.js is running');
// var template= <p>This is template from app.js</p>
// var template = (<div><p> This is template from app.js</p> <h1> hello</h1><p>okbie</p> </div>);
// var userName='Sneha U';
// var userAge=21;
// var userLocation='India';
var app = { title: "This is the title", subtitle: "This is the subtitle", options: ["one", "two", "three"] };
var user = { name: "sneha", age: 22, location: "India" };
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name:",
        user.name ? user.name : "anonymus"
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age:",
        user.age
    ),
    getLocation(user.location)
);
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Title:",
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        "Subtitle:",
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "location:",
        location
    );
    // else return 'unknown'
}
