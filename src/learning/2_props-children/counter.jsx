import React from 'react'

export default function AddOne({handleAdd,counter}) {
  return (
    <div className='container w-50 my-4'>
      <h3>counter: {counter}</h3>
      <button type="submit" onClick={handleAdd} class="btn btn-primary" >+</button>
      

    </div>
  )
}
