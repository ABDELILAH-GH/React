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
/* use this
<React.StrictMode>
   <Header/>
   <Content>
    <p>hello this abdelilah i'm full stack devloper</p>
    <p>hihihihiihihihihihihihihihihihihihihihihihihihihi</p>
    </Content>
   <Content>
    <p>nom i'm so excited to learn react js"</p>
    <p>yapayapyapyapya^pyapyapyapyayapyap"</p>
    </Content>
   <Content>
    <p>I found a react not hard like people said because i learned EcmaSCript before i started react</p>
    <p>I found a react not hard like people said because i learned EcmaSCript before i started react</p>
    </Content>
   
   
  </React.StrictMode>
*/