console.log('app.js is running')
// var template= <p>This is template from app.js</p>
var template = /*#__PURE__*/React.createElement("p", null, "This is template from app.js");
var appRoot=document.getElementById('app')
ReactDOM.render(template,appRoot);