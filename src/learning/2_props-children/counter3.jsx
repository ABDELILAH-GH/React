import React from 'react'

export default function AddTree({handleAdd,counter}) {
  return (
    <div className='container w-50 my-4'>
      <h3>count: {counter}</h3>
      <button type="submit" onClick={handleAdd} class="btn btn-primary" >+</button>
      

    </div>
  )
}
