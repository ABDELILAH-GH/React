import React, { useState } from 'react'

export default function Test() {
   const [formValue,setFormValue] = useState({
      name : '',
      age : '',
      country : '',
      checkbox : '',
      sport:'',
      travel:'',
      reading:''
   })
   const handleChange = (e) => {
      const currentTarget = e.target;
      const id = currentTarget.id
      let value = currentTarget.value
      if(currentTarget.type === "checkbox"){
         value = currentTarget.checked
      }

      setFormValue((prevState)=>{
         return {...prevState,...{[id]:value}}
      })
      
   }
  return (
    <div className='container mt-4'>
      {JSON.stringify(formValue)}
       <form >
          <div className="mb-3">
            <label for="" className="form-label">Name</label>
            <input
               type="text"
               className="form-control"
               id="name"
               onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="" className="form-label">Age</label>
            <input
               type="number"
               className="form-control"
               id="age"
               onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Country</label>
            <select   class="form-select form-select-lg"   name=""   id="country"  onChange={handleChange}>
               <option value="spain">spain</option>
               <option value="maroc">maroc</option>
               <option value="canada">canada</option>
               <option value="usa">usa</option>
            </select>
          </div>
          
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="checkbox"  onChange={handleChange}/>
            <label className="form-check-label" htmlFor="checkbox">checkbox </label>
         </div>
         <div className="form-check">
            <input className="form-check-input" type="radio" name="sameName"   id="sport"  onChange={handleChange}/>
            <label className="form-check-label" htmlFor="sport"> sport </label>
         </div>
         <div className="form-check">
            <input className="form-check-input" type="radio" name="sameName" id="travel"  onChange={handleChange}/>
            <label className="form-check-label" htmlFor="travel"> travel </label>
         </div>
         <div className="form-check">
            <input className="form-check-input" type="radio" name="sameName" id="reading"  onChange={handleChange}/>
            <label className="form-check-label" htmlFor="reading"> reading </label>
         </div>



       </form>
    </div>
  )
}
