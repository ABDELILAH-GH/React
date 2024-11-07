
export default function IsAdult({LastName}) {
  /*
L'erreur "isAdult is defined but never used" se produit parce que dans 
React, les noms de composants doivent commencer par une majuscule. Sinon,
React ne reconnaît pas isAdult comme un composant et l'interprète comme
une fonction ou une variable ordinaire.
*/


// dans cette cas nous avons pas utulise JSX
/*const age = 3;
let isAdult = false;
if (age >= 18){
    isAdult = true
}
if(isAdult){
    return <> <h1>Hello {LastName} Adult</h1></>
}else{
    return <> <h1>Hello {LastName} minor</h1></>
}*/
// en utlisant template literals dans le JSX
const age = 19
return <h1>Hello {LastName} {age >= 18 ? "Adult" : "Minor"}</h1>

}
