import { Component  } from "react" ;// cette importation pour le class
// les composants sont commes header ou un footer en a le droit de 
//faire l'appel de ce composants dans n'import quelle place
// ----------------------Type de composants------------------
// en a deux type le premier c'est les "class comp" et "function comp" 
//la plupare du temps en utilise "function comp"
// ------------------------function comp-----------------------------
/*export default function HelloWorld (){
   return (<div>hello world</div>)
}*/


// ----------------------------class comp---------------------------------
export default class HelloWorld extends Component{
     constructor(props){
      super()
     }
     componentDidMount () {
      console.log('our component is mounted')
     }
     componentDidUpdate(prevState){
      console.log(prevState,this.state)
      console.log("our component is updated")
     }
     componentWillUnmount () {
      console.log('our component is dead')

     }
    render (){
      return (<h1>Hello {this.props.last_name}</h1>)
    }
}