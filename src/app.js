class Header extends React.Component
{
    render()
    {
    return (<div><h1>Indecision App</h1><h2>Put your lives in the hands of a computer</h2></div>)
    }
    }

class Action extends  React.Component
{
    render()
    {
        return (<div><button>What should i do</button></div>)
    }
}

class Option extends  React.Component
{
    render()
    {
        return (<div>
           options component here
            </div>)
    }
}

class AddOption extends  React.Component
{
    render()
    {
        return (<div>

        Add option component here
            </div>)
    }
}

// const updateOptions=()=>
// {
//     options.push()
// }
// let options=[]
// <form onSubmit={updateOptions(e.tar)}><input type='text'></input>
//         <button>Add option</button>   
//             </form>
// <p>{options.length==0?'No options':'Here are your options'}</p>
const jsx=(<div><Header/><Action/><Option/><AddOption/></div>);
ReactDOM.render(jsx,document.getElementById('app'))

