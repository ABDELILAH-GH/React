// en utulise  le hooks useCallBack si en a un fonction qui est prendre beacoup de temps pour executer
// alors pour resourddre ce probleme en utulise useCallBack
import { useCallback } from "react";

export default function Maths(){
   const a = 2;
   const b = 3;
   const handleClick = useCallback(() => {
   const  result = a+b
   console.log(result)
   return result
   },[])
//alors le role de useCallBack dans cette cas c'est que : stoke la valeur de a et b 
// si la valeur de a ou b a changer le useCallback faire le render si le contaraire useCallBack
// ahhh j'ai deja la valeur de a et b alors en affche le resultat sans trous tard 
   return(
      <div className="container w-75 mt-3">
         <h3  className="d-flex justify-content-center">useCallBack</h3>
         <button
            type="submit"
            class="btn btn-primary"
            onClick={handleClick}
         >
            Calculate
         </button>
         
      </div>
   )
}