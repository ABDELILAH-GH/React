import { useState } from 'react';
import './App.css';
import AddOne from './learning/2_props-children/counter';


function App() {
  const [counter,setCounter] = useState(0)
  const handleAdd = () => {
    setCounter(prevState => prevState+1)
  }
  return (
 <AddOne handleAdd={handleAdd} counter={counter}/>



  );
}

export default App;
