import { Component } from "react";

export default class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }
  handelTotal = (value) => {
    this.setState((prevState) => ({
      total: prevState.total + value,
    }));
  };

  render() {
    //Cette ligne crée un tableau de 5 éléments contenant les valeurs suivantes : [50, 100, 150, 200, 250].
    //const arrayValues = Array.from({ length:3 }, (_, i) => (i + 1) * 50);
    const arrayValues = [50, 100, 150, 200, 250];
    return (
      <>
        {arrayValues.map((value) => (
          <button key={value} onClick={() => this.handelTotal(value)}>
            {value}
          </button>
        ))}
        <h3>Total: {this.state.total}</h3>
      </>
    );
  }
}
