const initialState = {
   tasks : [
      {id:1,label:"Task 1",isComplet:true},
      {id:2,label:"Task 2",isComplet:false},
      {id:3,label:"Task 3",isComplet:true},
      {id:4,label:"Task 4",isComplet:false},
   ]
}
export default function Reducer(state=initialState,action){
     switch(action.type){
      case('SUPPRIMER'):
      return {...state,tasks:state.tasks.filter(task => task.id !== action.payload)}
      case ('TERMINER'):
         return {...state,tasks:state.tasks.map((task) => (
            task.id === action.payload
            ?{...task, isComplet : !task.isComplet} 
            : task
         ))}
      default:
         return state
     }
}