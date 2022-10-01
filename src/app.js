class Header extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>

                <h2>{this.props.subtitle}</h2>
            </div>)
    }
}

class Options extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.option.length}</h1>
                {this.props.option.map((item) =>
                    <Option key={item} optionText={item}>{item}</Option>
                )}





                <p>options component here</p>
                <Option/>
            </div>)
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should i do</button>
            </div>)
    }
}



class AddOption extends React.Component {
    render() {
        return (
            <div>

                Add option component here
            </div>)
    }
}
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your lives in the hands of a computer'
        const options = ['thing one', 'thing two', 'thing four']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options option={options} />
                <AddOption />
            </div>)
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
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
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

