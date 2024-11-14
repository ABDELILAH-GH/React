import { useState } from "react";
export default function Total2() {
  const [total, setTotal] = useState(0);
  const handelTotal = (value) => {
    setTotal((prevState) => prevState + value);
  };
  const arrayValues = [50, 100, 200, 300, 400];
  return (
    <>
      {arrayValues.map((value) => (
        <button key={value} onClick={() => handelTotal(value)}>
          {value}
        </button>
      ))}
      <h3>Total: {total}</h3>
    </>
  );
}
