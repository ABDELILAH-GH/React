// using Function Comp
// export default function TextField({inputLabel,inputName,children}) {
  //en utilisant ce div car react il ne execute pas si il y'a plusieurs des CHILDREN 
  // le role de div c'est que concatiner les enfants des un seule pere DIV
  // exemple
  /*return (
    <div>
      <label>First Name</label>
      <input type="text"></input>
    </div>
  );*/


  // mais en utilise
  /*return (
   <>
         <label>{inputLabel}</label>
         
         <input name = {inputName} type="text"></input>
         <div>{children}</div>
   </>
  )
} */

// using Class Function
import { Component } from "react";
export default class TextField extends Component {
   render() {
    return <>
         <label>{this.props.inputLabel}</label> 
         <input name = {this.props.inputName} type = "text"></input>
         <div>{this.props.children}</div>        
          </>
   }
}
