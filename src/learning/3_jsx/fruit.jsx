// ------------------------using function comp----------------------------

// en ne change pas dans les donnes qui nous avons reçus
export default function Fruit({ fruits }) {
  // pour pusher un item par exemple en utilise cette methose
//   const tempFruit = fruits;
  const displayFruit = () => fruits.map((fruit) => <li>{fruit}</li>);
//   tempFruit.push("newFruit");
  return (
    <>
    {/* pour ajouter un class a un elem en utlise className pas class */}
      <h1 className="h1">fruits:</h1>
      <ul className="list">{displayFruit()}</ul>
    </>
  );
}

/*import { Component } from "react";
//------------------------using class comp---------------------------
export default class Fruit extends Component{
   render(){
       return <>

         
             </>
   }
}*/
