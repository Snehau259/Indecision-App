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
    constructor(props) {
        super(props)
        // this.removeAll = this.removeAll.bind(this)
    }
    // removeAll() {
    //     // this.props.option=[]
    //     console.log(this.props.option)
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <h1>{this.props.option.length}</h1>
                {this.props.option.map((item) =>
                    <Option key={item} optionText={item}>{item}</Option>
                )}





                <p>options component here</p>
                <Option />
            </div>)
    }
}

class Action extends React.Component {
    // handlePick() { return alert('handle pick') }

    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>What should i do</button>

            </div>)
    }
}



class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const formInp = e.target.elements.formName.value.trim()
        console.log('e', formInp)
        //    const test=this.props.option;
        // this.props.option.push(e.target.elements.formName.value)
        if (formInp)
            alert(formInp)
        // e.target.elements.formName.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption.bind(this)}>
                    <input type='text' name='formName'></input>
                    <button>Add option</button>
                </form>


            </div>)
    }
}
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { options: ['thing one', 'thing two', 'thing three'] }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick(){
        const randNum=Math.floor(Math.random() * this.state.options.length);
        console.log(randNum)
        alert(this.state.options[randNum])
    }
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your lives in the hands of a computer'
        // const options = ['thing one', 'thing two', 'thing four']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options option={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption />
            </div>)
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>)
    }
}



// const handleAddOption=()=>
// {
//     options.push()
// }
// let options=[]
// <form onSubmit={handleAddOption(e.tar)}><input type='text'></input>
//         <button>Add option</button>   
//             </form>
// <p>{options.length==0?'No options':'Here are your options'}</p>
// const jsx=();
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

