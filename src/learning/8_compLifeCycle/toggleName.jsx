import { Component } from "react";

import HelloWorld from "../1_components/script";
export default class ToggleName extends Component {

   constructor(props) {
      super (props);
      this.state = {
         displayName : true
      }
   }
   toggleName = () => {
      this.setState((prevState) => {
         return {displayName:!prevState.displayName}
      })
   }
   render () {
      return (<>
      <button onClick={this.toggleName}>
       {this.state.displayName.toString()}
       </button>
       {
         this.state.displayName === true ?
         <HelloWorld last_name={'GHOUMMACH'}/>
         : undefined
       }
      
      
      </>)
   }
}