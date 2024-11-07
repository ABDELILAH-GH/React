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
    render (){
      return (<h1>this is title</h1>)
    }
}