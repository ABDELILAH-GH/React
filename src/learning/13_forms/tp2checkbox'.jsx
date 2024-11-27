import { useState, useEffect } from "react";

export default function Hobby() {
  const [loisirs, setLoisirs] = useState({ 
    lecture: false,
    sport: false,
    voyage: false,
    films: false 
  });
  const [choix, setChoix] = useState("");

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setLoisirs((prevSatate) => ({ ...prevSatate, [name]: checked }));
  };

  useEffect(() => {
    setChoix(Object.keys(loisirs).filter(key => loisirs[key]).join(", "));
  }, [loisirs]);  

  const list = ["lecture", "sport", "voyage", "films"];

  return (
    <>
      <h1>Vos loisirs :</h1>
      {list.map((loisir) => (
        <div key={loisir}>
          <input type="checkbox" name={loisir} onChange={handleChange} />
          {loisir.charAt(0).toUpperCase() + loisir.slice(1)}
        </div>
      ))}
      <h3>Vos choix : {choix}</h3>
    </>
  );
}
