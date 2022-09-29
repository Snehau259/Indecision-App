//contains jsx
console.log('app.js is running')

let count=0
const addOne=() => {
    count++;
    console.log('added one',count)
    renderCounterApp();};
const minusOne=() => {
    count--;
    console.log('subtracted one')
    renderCounterApp();};
const reset=() => {
    count=0;
    console.log('reset')
    renderCounterApp();};



// console.log(templateTwo)
const appRoot = document.getElementById('app')



function renderCounterApp()
{
    const templateTwo=(<div>
        <h1>Count:{count}</h1>
        
        <button id='my-id' className="button" onClick={addOne}>+1</button>
        <button  onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button></div>);
        ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();