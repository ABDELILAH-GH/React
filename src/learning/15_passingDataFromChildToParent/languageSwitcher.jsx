import React from 'react'
import "./languageSwitcher.css"
export default function LanguageSwitcher({onLanguageChange}) {
   const handeChange = (e) => {
      e.preventDefault()
        onLanguageChange(e.currentTarget.dataset.lang)
   }
  return (
    <div className='container'>
  <ul
   class="nav justify-content-center mt-4 ">
   <li class="nav-item">
      <a className="nav-link " href="#" data-lang="AR" onClick={handeChange} >العربية</a></li>
   <li class="nav-item">
      <a class="nav-link" href="#" data-lang="EN" onClick={handeChange}>English</a>
   </li>
   <li class="nav-item">
      <a class="nav-link" href="#" data-lang="ES" onClick={handeChange}>Espgnol</a>
   </li>
   <li class="nav-item">
      <a class="nav-link" href="#" data-lang="FR" onClick={handeChange} >French</a>
   </li>
  </ul>
  

    </div>
  )
}
