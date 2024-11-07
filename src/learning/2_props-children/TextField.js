export default function TextField({inputName,inputLabel}) {
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
  return (
   <>
         <label>{inputLabel}</label>
         <input name = {inputName} type="text"></input>
         <div>Veuillez enter un valeur</div>
   </>
  )
}
