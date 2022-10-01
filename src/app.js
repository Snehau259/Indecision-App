class Header extends React.Component
{
    render()
    {
    return (<div><h1>Indecision App</h1><h2>Put your lives in the hands of a computer</h2></div>)
    }
    }

    class Options extends  React.Component
    {
        render()
        {
            return (
                <div> 
                <p>options component here</p>
                <Option/>
                </div>)
        }
    }

class Action extends  React.Component
{
    render()
    {
        return (<div><button>What should i do</button></div>)
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
class IndecisionApp extends React.Component
{
    render()
    {
    return (<div><Header/><Action/><Options/><AddOption/></div>)
    }
    }

    class Option extends  React.Component
    {
        render()
        {
            return (<div>
               option component here
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
// const jsx=();
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))

