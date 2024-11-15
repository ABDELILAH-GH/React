import { Component } from "react";

export default class Compteur extends Component {
     constructor (props)  {
      super (props);
      this.state = {
         counter : 0
      }
      console.log("hi from contructor")
     }
     

     handlePlus = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    };
     handleMoins = () => {
        this.setState((preventState) => { 
         return {counter:preventState.counter -1}
      })
     }
     handleRest = () => {
        this.setState((preventState) =>{ 
         return {counter:0}
      })
     }
     // componentDidMount : en utilise ce methode quand nous somme besoin de recuperer un element un seul fois
     componentDidMount (){
      // la pluspar de temps quand nous pouvons recuperer un api
      console.log("compnent mounted")
     }


     //componentDidUpdate : par ecmple quand l'utilisateur faire un maire a jour ou chnager son email en affiche un alert 
     componentDidUpdate (prevProps,prevState) {
          if(prevState !== this.state)
            alert("counter is updated")
          console.log(prevState,this.state)
     }

     //componentWillUnmount 
     // visiter toggleName.jsx
     // visiter 1_composnats/script.js // HelloWorld


     render () {
      console.log("hi from render")
      return (<>
      <input type="submit" value='plus +'  onClick={this.handlePlus} className="btn1"/>
      <input type="submit" value='moins -' onClick={this.handleMoins} className="btn1"/>
      <input type="submit" value='rest à 0' onClick={this.handleRest} className="btn1"/>
      <h3>il y'a {this.state.counter}</h3>
      </>)
     }
     
}