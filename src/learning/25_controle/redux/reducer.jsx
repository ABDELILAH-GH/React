const initialSatate = {
   count : 0
}
export default function ReducerC ( state = initialSatate , action) {
  switch (action.type){
   case ('INCREMENT') : 
   return {...state,count:state.count+1}
   case ('INCREMENT_BY_VAL'):
      return {...state, count:state.count + action.payload}
   default :
   return state
  }
}