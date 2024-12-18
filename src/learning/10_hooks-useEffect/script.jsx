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
    <div className="container w-75 mt-3">
      Date : <span>{time.toLocaleString()}</span><br />
      <hr />
      <h1>il y'a {count} seconds</h1>

      <button
        type="submit"
        class="btn btn-primary "
        onClick={handleClick}
      >
        incrementer
      </button>
      <button
        type="submit py-3"
        class="btn btn-primary ms-3"
        onClick={handleReset}
      >
        reset
      </button>
      <hr />
    </div>
  );
}
// use this
// <Add intialValue={2} step={3}/>
