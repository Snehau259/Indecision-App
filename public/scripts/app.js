<<<<<<< HEAD
"use strict";

//contains jsx
console.log('app.js is running');
// const template= <p>This is template from app.js</p>
// const template = (<div><p> This is template from app.js</p> <h1> hello</h1><p>okbie</p> </div>);
// const userName='Sneha U';
// const userAge=21;
// const userLocation='India';
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
=======
'use strict';

var nameVar = 'Sneha';
var nameVar = 'Sruthi';
console.log('nameVar', nameVar); // redefining and reassigning is possible


var nameLet = 'Sneha';
nameLet = 'Sruthi';
console.log('nameLet', nameLet); //reassigning is possible but redefining is not

var nameConst = 'Sneha';
// nameConst='Sruthi';
console.log('nameConst', nameConst); //reassigning is possible but redefining is not

// SCOPES
/* function getPetName()
{
    var petName='Roger'; ..var has only function scope
    return petName;
}
getPetName();
console.log(petName) Uncaught ReferenceError: petName is not defined  */

/* function getPetName()
{
    const petName='Roger'; //..const has only function scope
    return petName;
}
getPetName();
console.log(petName) //Uncaught ReferenceError: petName is not defined  */

// LET AND CONST ARE BLOCK SCOPED WHICH DOES INCLUDE FUNCTIONS->CANNOT ACCESS OUTSIDE BLOCK

var fullName='Sneha u'
/*if (fullName)
{
    let firstName=fullName.split()[0];
    console.log('firstName inside block',firstName)
}
console.log('firstName outside block',firstName) //Uncaught ReferenceError: firstName is not defined */

if (fullName) {
    var firstName = fullName.split()[0];
    console.log('firstName inside block', firstName);
>>>>>>> d6389c168344fb9600a09c6be00cc5c8ba3373d5
}
console.log('firstName outside block', firstName);
