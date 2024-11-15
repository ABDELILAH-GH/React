import { Component } from "react";

export default class Filiere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  handelAfficher = (value) => {
    if (!this.state.list.includes(value)) {
      this.setState({ list: [...this.state.list, value] });
    }
  };
  handelDelete = (value) => {
    this.setState({list: this.state.list.filter((item) => item !== value)});
   };

  render() {
    const list = ["DIV", "GE", "ID", "TCE", "ELT"];
    return (
      <>
        <h3 className="h1">Choisir Filiere : </h3>
        {list.map((value) => (
          <button key={value} onClick={() => this.handelAfficher(value)}>
            {value}
          </button>
        ))}

        <h4>Vos Choix : </h4>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {item}
              <button className="delete" onClick={() => this.handelDelete(item)}>
                  X
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
