var app = { title: "Indecision App", subtitle: "Put your life in the hands of a computer" ,options:[]};
// const templateTwo=(<div>
//     <h1></h1>
//     <p></p>
//     </div>);
const onFormSubmit=
(e)=>
{
    e.preventDefault(); 
    
   
    /* The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    For example, this can be useful when:
    
    Clicking on a "Submit" button, prevent it from submitting a form
    Clicking on a link, prevent the link from following the URL
    
    in this case we need no data to be added to the url
    */
   const formInput=e.target.option.value;
   if (formInput)
   {
    app.options.push(formInput)
    e.target.option.value=''
   }
   console.log('form submitted')
   renderForm();
} 
//const numbers=[1,2,3,4,5]
const removeAll=()=>{
    app.options=[];
    renderForm();
}
const makeDecision=()=>{
    const randNum=Math.floor(Math.random()*app.options.length);
alert(app.options[randNum]); }

function renderForm()
{
    const templateTwo = (<div><h1>Title:{app.title}</h1>
 {app.subtitle && <p>Subtitle:{app.subtitle}</p>}
 <button onClick={removeAll}>Remove all</button>
 <p>{app.options.length>0? 'Here are your options' : 'No options'}</p>
 <button disabled={app.options.length===0} onClick={makeDecision} >What should i do?</button>
 {
    app.options.map((item)=>
    {return <li key={item}>{item}</li>}
    )
 }



 <form onSubmit={onFormSubmit} >
 <input type="text" name="option"/>
 <button>Add option</button>

 </form>

 </div>);
 ReactDOM.render(templateTwo, appRoot);
}

 const appRoot = document.getElementById('app')
 renderForm();
