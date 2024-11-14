import { Component } from "react";
export default class Revise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: true,
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return { message: !prevState.message };
    });
  };

  render() {
    return (
      <>
        <h3>
          {this.state.message
            ? "Binevenu à l'inscription"
            : "Inscription effecuée"}
        </h3>
        <button onClick={this.handleClick}>
          {this.state.message ? "Inscrire" : "Merçi"}
        </button>
      </>
    );
  }
}
