import React, { useState } from 'react'
import LanguageSwitcher from './languageSwitcher'

export default function Page() {
   const [currentLang,setCurrentLang] = useState()
   const displayMessage = () => {
     switch (currentLang){
      case 'AR': return 'السلام عليكم'
      case 'FR' : return 'Bonjour Français'
      case 'EN' : return 'hello this english'
      case 'ES' : return 'Holla amigos'
      default : return 'walo walo'
     }
   }
  return (
    <div className='container'>
       <LanguageSwitcher onLanguageChange ={(value)=>{setCurrentLang(value)}}/>

      <hr />
      current Language: {currentLang}
      <hr />
      <div
         className="alert alert-primary"
         role="alert"
      >
         <strong>{displayMessage}</strong> 
      </div>
      
   </div>
  )
}
