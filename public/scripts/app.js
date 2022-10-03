'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            // console.log(this.props);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
        // this.removeAll = this.removeAll.bind(this)
    }
    // removeAll() {
    //     // this.props.option=[]
    //     console.log(this.props.option)
    // }


    _createClass(Options, [{
        key: 'render',
        value: function render() {
            console.log(this.props);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                React.createElement(
                    'h1',
                    null,
                    this.props.option.length
                ),
                this.props.option.map(function (item) {
                    return React.createElement(
                        Option,
                        { key: item, optionText: item },
                        item
                    );
                }),
                React.createElement(
                    'p',
                    null,
                    'options component here'
                ),
                React.createElement(Option, null)
            );
        }
    }]);

    return Options;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',

        // handlePick() { return alert('handle pick') }

        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handlePick, disabled: !this.props.hasOption },
                    'What should i do'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var formInp = e.target.elements.formName.value.trim();
            console.log('e', formInp);
            //    const test=this.props.option;
            // this.props.option.push(e.target.elements.formName.value)
            if (formInp) alert(formInp);
            // e.target.elements.formName.value = ''
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption.bind(this) },
                    React.createElement('input', { type: 'text', name: 'formName' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component5) {
    _inherits(IndecisionApp, _React$Component5);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this5 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this5.state = { options: ['thing one', 'thing two', 'thing three'] };
        _this5.handleDeleteOptions = _this5.handleDeleteOptions.bind(_this5);
        _this5.handlePick = _this5.handlePick.bind(_this5);
        return _this5;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randNum = Math.floor(Math.random() * this.state.options.length);
            console.log(randNum);
            alert(this.state.options[randNum]);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App';
            var subtitle = 'Put your lives in the hands of a computer';
            // const options = ['thing one', 'thing two', 'thing four']
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOption: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { option: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Option: ',
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

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


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
