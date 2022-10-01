class VisibilityToggle extends React.Component {


    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = { visibility: false }
    }
    handleToggleVisibility() {
        console.log(this.state.visibility)
        this.setState((prev)=>{return {visibility:!prev.visibility}});

    }

    render() {
        return (<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide details':'Show Details'}</button>
            {this.state.visibility && <p>here are the details</p>}
            </div>)
        
    }


}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))