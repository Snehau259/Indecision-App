//contains jsx
console.log('app.js is running')

let count=0
const addOne=() => {console.log('added one')};
const minusOne=() => {console.log('subtracted one')};
const reset=() => {console.log('reset')};
const templateTwo=(<div>
<h1>Count:{count}</h1>

<button id='my-id' className="button" onClick={addOne}>+1</button>
<button  onClick={minusOne}>-1</button>
<button onClick={reset}>reset</button></div>);


console.log(templateTwo)
const appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot);


