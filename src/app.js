//contains jsx
console.log('app.js is running')
// var template= <p>This is template from app.js</p>
// var template = (<div><p> This is template from app.js</p> <h1> hello</h1><p>okbie</p> </div>);
// var userName='Sneha U';
// var userAge=21;
// var userLocation='India';
var app = { title: "This is the title", subtitle: "This is the subtitle" ,options:["one","two","three"]};
var user = { name: "sneha", age: 22, location: "India" };
var template = (<div>
    <h1>Name:{user.name ? user.name : "anonymus"}</h1>
    {user.age>=18 && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
</div>);
var templateTwo = (<div><h1>Title:{app.title}</h1>
{app.subtitle && <p>Subtitle:{app.subtitle}</p>}
<p>{app.options.length>0? 'Here are your options' : 'No options'}</p>
</div>);
var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot);

function getLocation(location) {
    if (location)
        return <p>location:{location}</p>
    // else return 'unknown'
} 