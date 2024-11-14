const { Component } = require("react");

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  handleClick2 = () => {
    this.setState((prevState) => {
      return {counter:prevState.counter -1}
    })
  }
  handleReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>hello wolrd</h1>
          <button onClick={this.handleClick} className="btn1">
            Clicker pour inceremnter ++
          </button>
          <br />
          <button onClick={this.handleClick2} className="btn1">
            Clicker pour moins --
          </button>
          <br />
          <button onClick={this.handleReset} className="btn2">Reset </button>
          <br />
          <h1>il y'a {this.state.counter} second</h1>
        </div>
      </>
    );
  }
}
