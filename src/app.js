//contains jsx
console.log('app.js is running')
// var template= <p>This is template from app.js</p>
// var template = (<div><p> This is template from app.js</p> <h1> hello</h1><p>okbie</p> </div>);
var userName='Sneha U';
var userAge=21;
var userLocation='India';
var templateTwo=(<div><h1>{userName}</h1><p>Age:{userAge}</p><p>Location:{userLocation}</p></div>);
var appRoot=document.getElementById('app')
ReactDOM.render(templateTwo,appRoot);