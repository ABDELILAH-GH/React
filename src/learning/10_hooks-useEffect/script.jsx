import { useEffect, useState } from "react";

export default function Add({ intialValue, step }) {
  const handleClick = () => {
    setCount((prevState) => prevState + step);
  };

  const handleReset = () => {
    setCount(0);
  };
  const [count, setCount] = useState(intialValue);
  const [age, setAge] = useState();
  const [time, setTime] = useState(new Date());
  let timer = null

  // Hooks
  //--> useState()
  //--> useEffect()

   //after render()
   useEffect(() => {
      console.log("every render");
      // setTimer(()=> new Date())
    });

  // componentDidMount()
  useEffect(() => {
    console.log("component mounted");
   //  timer = setInterval (() => {
   //    console.log('tick')
   //    setTime(new Date())
   //  },1000)
    //componentWillmnMount
   return ()=>{
      clearInterval(timer)
   }
  }, []);

  //componentDidUpadte()
  useEffect(() => {
    console.log("count changed");
  }, [count]);

  //componentDidUpadte()
  useEffect(() => {
    console.log("age changed");
  }, [age]);

 
  return (
    <>
      Date : <span>{time.toLocaleString()}</span><br />
      <button onClick={handleClick}>incrementer</button><br />
      <button onClick={handleReset}>reset</button><br />
      <h1>il y'a {count} seconds</h1>
    </>
  );
}
// use this
// <Add intialValue={2} step={3}/>
