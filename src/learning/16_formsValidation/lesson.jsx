import React, { useRef, useState } from 'react'

export default function FormValidation() {
  const inputName = useRef()
  const inputEmail = useRef()
  const inputMessage = useRef()
  const inputCountry = useRef()
  const inputAcceptConditions = useRef()
  const [errors,setErrors] = useState([])

 const validateForm = () => {
     const data = {
      name : inputName.current.value ,
      email:inputEmail.current.value ,
      message:inputMessage.current.value ,
      country:inputCountry.current.value ,
      acceptAllConditions:inputAcceptConditions.current.checked,
     }
     let isFormValid = true
     if(data.name.trim() === ''){
      setErrors(prevState => [...prevState, 'Name requered'])
     }
     isFormValid = false

     if(data.email.trim() === ''){
      setErrors(prevState => [...prevState, 'Email requered'])
     }
     else if (!data.email.match(/^\S+@\S+\.\S+$/)){
      setErrors(prevState => [...prevState, 'Email format is invalid'])
     }
     isFormValid = false


     if(data.message.trim() === ''){
      setErrors(prevState => [...prevState, 'Message requered'])
     }
     isFormValid = false


     if(data.country.trim() === ''){
      setErrors(prevState => [...prevState, 'country not selected'])
     }
     isFormValid = false


     if(!data.acceptAllConditions){
      setErrors(prevState => [...prevState, 'accept conditions shoud be clicked'])
     }
     isFormValid = false

     return isFormValid
 }

  const handleSubmit = (e) => {
      e.preventDefault()
      setErrors([])
      validateForm()
   }

  return (
<div className={'container-fluid w-75 mx-auto my-2'}>
<form onSubmit={handleSubmit}>
   {errors.length>0 ?
   <div   className="alert alert-warning"  role="alert">
      <strong>Error</strong> 
      <ul>
         {errors.map((error,key)=>
         <li key={key}>{error}</li>
         )}Y
      </ul>
   </div>
   : '' 
   }
    {/*<-- Name input -->*/}
    <div className="form-outline mb-3">
        <label className="form-label" htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" ref={inputName} />
    </div>

    {/*<-- Email input -->*/}
    <div className="form-outline mb-3">
        <label className="form-label" htmlFor="email">Email address</label>
        <input type="text" id="email" className="form-control" ref={inputEmail}/>
    </div>

    {/*<-- Message input -->*/}
    <div className="form-outline mb-3">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="form-control" id="message" rows="4" ref={inputMessage}></textarea>
    </div>

    {/*<-- Country select -->*/}
    <div className="form-group mb-3">
        <label>Country</label>
        <label htmlFor="country"></label>
        <select className="form-control" id="country" ref={inputCountry}>
            <option value=''>Select country</option>
            <option value='MA'>Maroc</option>
            <option value='DZ'>Algérie</option>
            <option value='TN'>Tunisie</option>
        </select>
    </div>

    {/*<-- Checkbox -->*/}
    <div className="form-check mb-3">
        <div className="d-flex">
            <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions" ref={inputAcceptConditions}/>
            <label className="form-check-label" htmlFor="acceptAllConditions">
                Accept all conditions
            </label>
        </div>
    </div>

    {/*<-- Submit -->*/}
    <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>
</form>
</div>
  )
}




