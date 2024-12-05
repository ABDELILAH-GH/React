import { useRef, useState } from "react";

export default function FormValidation3() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();
  const inputAcceptAllConditions = useRef();
  const [isFormSent,setIsFormSent] = useState(false)
  const [errors,setErrors] = useState()
  const data = {
   name : inputName.current.value,
   email : inputEmail.current.value,
   message : inputMessage.current.value,
   acceptAllConditions : inputAcceptAllConditions.current.checked,
  }
  const validateForm = () => {
   if(data.name.trim() === ""){
      
   }
  }

  const resetForm  = ()=>{
   inputName.current.value =""
   inputEmail.current.value = ""
   inputMessage.current.value = ""
   inputAcceptAllConditions.current.checked = false 
  
  }
  const handleSubmit = (e) => {
   e.preventDefault()

     // quand tu click sur submit en affiche une alert
     setIsFormSent(true)
     // pour reset le formulaire 
     resetForm()
     console.log(data)
  }
  return (
     <div className="container w-75 mt-2">
      {
         isFormSent? 
         <div
         class="alert alert-success"
         role="alert"
      >
         <strong>Seccess</strong> Message sent successfuly !!
        </div>
        :""

      }

      
         <form onSubmit={handleSubmit}>
        <h3>Contact form</h3>
        <hr />
        <div className="mb-3">
          <label for="" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" ref={inputName} />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Email adress
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            ref={inputEmail}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            ref={inputMessage}
          ></textarea>
        </div>
        <div classNameName="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="accept"
              ref={inputAcceptAllConditions}
            />
            <label className="form-check-label" htmlFor="accept">
              Accept all conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </form>
     </div>
  );
}
