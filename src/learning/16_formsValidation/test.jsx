import React, { useRef, useState } from 'react'

export default function FromValidation2 () {
   const inputName = useRef('')
   const inputEmail = useRef('')
   const inputMessage = useRef('')
   const inputCountry = useRef('')
   const inputAcceptConditions = useRef('')
   const [errors,setErrors] = useState([])
   const FormValidation = () => {
      const data = {
         name : inputName.current.value ,
         email : inputEmail.current.value,
         country : inputCountry.current.value,
         message : inputMessage.current.value,
         acceptConditions : inputAcceptConditions.current.checked
      }
      let isFormValid = true
      if(data.name.trim() === ''){
         setErrors(prevState => [...prevState,'Name required'])
      }
      isFormValid = false

      if(data.message.trim() === ''){
         setErrors(prevState=> [...prevState,'Message required'])
      }
      isFormValid = false

      if(data.country.trim() === ''){
         setErrors(prevState=> [...prevState,'Country should be selected'])
      }
      isFormValid = false

      if(data.email.trim() === ''){
         setErrors(prevState=> [...prevState,'Email requered'])
         isFormValid = false
      } else if (!data.email.match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
         setErrors(prevState => [...prevState,"le format d'email doit etre comme ça exemple@domain.com" ])
         isFormValid = false
      }

      if(!data.acceptConditions){
         setErrors(prevState=> [...prevState,'Accept condtiond shoud be  clicked'])
      }
      isFormValid = false

      return isFormValid
   }
   const handleSubmit = (e) => {
     e.preventDefault()
     setErrors([])
     FormValidation()
   }
  return (
    <div className='container w-75 mt-2'>
      <form onSubmit={handleSubmit}>
   {
      errors.length>0 ?
      <div class="alert alert-danger" role="alert">
         <strong>Error:</strong>
           <ul>
            {errors.map((error,key)=>(
               <li key={key}>{error}</li>
            ))}
           </ul>
      </div> 
      :''      
   }
      <div class="mb-3">
         <label for="" class="form-label">Name</label>
         <input
            type="text"
            class="form-control"
            id="name"
            ref={inputName}
         />
      </div>
      <div class="mb-3">
         <label for="" class="form-label">Email adress</label>
         <input
            type="text"
            class="form-control"
            id="email"
            ref={inputEmail}
         />
      </div>

      <div class="mb-3">
         <label for="" class="form-label">Country</label>
         <select   class="form-select form-select-lg"  id="country" ref={inputCountry}>
            <option value=''>Select one</option>
            <option value="Maroc">Maroc</option>
            <option value="Canada">Canada</option>
            <option value="usa">USA</option>
         </select>
      </div>
      <div class="mb-3">
         <label for="" class="form-label">Message</label>
         <textarea class="form-control" id="message" rows="3" ref={inputMessage}></textarea>
      </div>

      <div class="form-check">
         <input class="form-check-input" type="checkbox" id="acceptConditions" ref={inputAcceptConditions}/>
         <label class="form-check-label" htmlFor='acceptConditions'> AcceptConditions</label>
      </div>
      <button type="submit" class="btn btn-primary" >Validate</button> 
      </form>
    </div>
  )
}
