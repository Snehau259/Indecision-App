let visibility = false;
const showDetails = () => {
    console.log('clicked')
    visibility = !visibility;

    // return <p>here are the details</p>
    // ReactDOM.render(template, appRoot);
    renderPage();
}






const renderPage = () => {
    const template = (<div>
        <h1>Visibility Toggle</h1>
        <button onClick={showDetails}>{visibility ? 'hide details' : 'show details'}</button>
        {visibility && (<div><p>here are your details</p></div>)}
    </div>)
    ReactDOM.render(template, appRoot);
}


const appRoot = document.getElementById('app')
renderPage();
