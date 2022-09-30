"use strict";

var app = { title: "Indecision App", subtitle: "Put your life in the hands of a computer", options: [] };
// const templateTwo=(<div>
//     <h1></h1>
//     <p></p>
//     </div>);
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  /* The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
   For example, this can be useful when:
  
  Clicking on a "Submit" button, prevent it from submitting a form
  Clicking on a link, prevent the link from following the URL
  
  in this case we need no data to be added to the url
  */
  var formInput = e.target.option.value;
  if (formInput) {
    app.options.push(formInput);
    e.target.option.value = '';
  }
  console.log('form submitted');
  renderForm();
};
//const numbers=[1,2,3,4,5]
var removeAll = function removeAll() {
  app.options = [];
  renderForm();
};
var makeDecision = function makeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randNum]);
};

function renderForm() {
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
      "button",
      { onClick: removeAll },
      "Remove all"
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: makeDecision },
      "What should i do?"
    ),
    app.options.map(function (item) {
      return React.createElement(
        "li",
        { key: item },
        item
      );
    }),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );
  ReactDOM.render(templateTwo, appRoot);
}

var appRoot = document.getElementById('app');
renderForm();
