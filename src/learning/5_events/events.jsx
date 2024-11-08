import { Component } from "react";

// Events 
// using function comp
export function Event (){
   const handelClick = () => {
      alert ("Hello my name is abdeilah , i'm a full stack devloper")
   }
   return <>
     <button className="btn" onClick={handelClick}>
      Click
      </button>
   </>
}

// using class comp
/*export default class Event extends Component {  
   handleClick = () => {  
     alert("This is Event");  
   };  
 
   render() {  
     return (  
       <>  
         <button className="btn" onClick={this.handleClick}>  
           Click  
         </button>  
       </>  
     );  
   }  
 } */ 
