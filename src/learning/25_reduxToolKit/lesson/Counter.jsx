import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByVal } from './slice'

export default function Counter() {
   const count = useSelector((state)=>state.counter.count)
   const dispatch = useDispatch()
  return (
   <>   
    <h2>Counter : {count}</h2>
   <button className='btn btn-danger'
   onClick={()=>dispatch(increment())}
   >
      +1
   </button>
   <button className='btn btn-info'
   onClick={()=>dispatch(incrementByVal(7))}
   >
      +7
   </button>

   </>
  )
}
