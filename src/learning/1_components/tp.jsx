export default  function Header (){
   return <>
     <h1>Le primiere titre</h1>
   </>
}
export function Content ({children}){
   return <>
        <h2>Le deuxieme titre</h2>
        <p>{children}</p>   
        <p>{children}</p>   
   </>
}