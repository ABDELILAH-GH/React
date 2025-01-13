import { Provider } from "react-redux";
import Task from "./task";
import store from "./store";

export default function RnTest() {
  return (<Provider store={store}>
   <Task/>
  </Provider>);
}
