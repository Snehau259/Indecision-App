//contains jsx
console.log('app.js is running')
// const template= <p>This is template from app.js</p>
// const template = (<div><p> This is template from app.js</p> <h1> hello</h1><p>okbie</p> </div>);
// const userName='Sneha U';
// const userAge=21;
// const userLocation='India';
const app = { title: "This is the title", subtitle: "This is the subtitle" ,options:["one","two","three"]};
const user = { name: "sneha", age: 22, location: "India" };
const template = (<div>
    <h1>Name:{user.name ? user.name : "anonymus"}</h1>
    {user.age>=18 && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
</div>);
const templateTwo = (<div><h1>Title:{app.title}</h1>
{app.subtitle && <p>Subtitle:{app.subtitle}</p>}
<p>{app.options.length>0? 'Here are your options' : 'No options'}</p>
</div>);
const appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot);

function getLocation(location) {
    if (location)
        return <p>location:{location}</p>
    // else return 'unknown'
} 