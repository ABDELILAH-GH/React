const { Component } = require("react");

export default class State extends Component{
   constructor (props){
      super (props);
      this.state = {
         counter : 0,
         date : undefined
      }
   }
   componentDidMount(){
      setInterval(() => {
          this.setState(prevState => {
            return {counter:prevState.counter+1}
            }
          )

      }, 1000);
   }

   render (){
      return <>  
       <h1>il y'a {this.state.counter} second</h1>
      </> 
   }
}