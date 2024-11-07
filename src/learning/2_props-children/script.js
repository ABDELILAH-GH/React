 
 //methode 1
 export  function Hello (props){
   return (<h1>Hello {props.last_name}</h1>)
}
// methode 2 : destructuring :le plus utulisé
export function Show ({last_name}){
   return(<h1>Hello {last_name}</h1>)
}