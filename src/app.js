//contains jsx
console.log('app.js is running')
// var template= <p>This is template from app.js</p>
// var template = (<div><p> This is template from app.js</p> <h1> hello</h1><p>okbie</p> </div>);
// var userName='Sneha U';
// var userAge=21;
// var userLocation='India';
var app={title:"This is the title", subtitle:"This is the subtitle"};
var templateTwo=(<div><h1>Title:{app.title}</h1><p>Subtitle:{app.subtitle}</p></div>);
var appRoot=document.getElementById('app')
ReactDOM.render(templateTwo,appRoot);