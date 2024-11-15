
import { Component } from "react";

export default class Rev extends Component {

   constructor(props){
      super(props);
      this.state={
         fruit : 0
      }
      this.state = {
         fruitList : []
      }
   }
   handleAddFruit = () => {
   this.fruitList.map((fruit,index) => <ul key={index}>{this.fruit}</ul>)
   }
   handleInputName  = () =>{
      const fruit = document.querySelector('#name').value
      this.setState(fruit)
     }
   handleClick = (e) => {
   e.preventDefault()
   this.setState([...this.fruitList,this.fruit])
   }
  

   render () {
      return (<>
      <form >
      <input type="text" id = "name" onChange={this.handleInputName} />
      <input type="button" value = "add fruit" />
      <h3 className="h1">Fruits: </h3>
      </form>
      <ul></ul>
      
      </>)
   }
}