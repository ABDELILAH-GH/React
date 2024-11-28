import React from 'react'
export default function Table({formValues,handleDelete}) {
   
  return (
    <>
   
  {
   formValues.map((item,key)=>(
      <tr key={key}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.nh}</td>
      <td>{item.regional}</td>
      <td>
         <button   type="submit"    class="btn btn-danger"  onClick={()=>handleDelete(item.id)}>
         supprimer
         </button>
      </td>
   </tr>
   ))
  }
   
    </>
  )
}
