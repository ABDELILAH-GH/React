import { Provider } from "react-redux"
import store from "./store"
import Task from "./task"
export default function ApptlEmf(){
   return (
      <Provider store={store}>
         <Task/>
      </Provider>
   )
}