import { useRef, useState, useEffect } from "react";
import Holder from "holderjs";

export default function DarkCard({ title, description, src }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputDark = useRef();

  useEffect(() => {
    Holder.run();
  }, []);

  const handleDarkMode = () => {
    setIsDarkMode(inputDark.current.checked);
  };

  return (
    <div
      className={`container w-75 mt-3 ${
        isDarkMode ? "text-white bg-dark" : "text-dark bg-white"
      }`}
    >
      <div className="form-check form-switch d-flex justify-content-end">
        <input
          className="form-check-input"
          type="checkbox"
          ref={inputDark}
          onChange={handleDarkMode}
        />
      </div>
      <div
        className={`card mt-3 ${
          isDarkMode ? "text-white bg-dark" : "text-dark bg-light"
        }`}
      >
        <img
          className="card-img-top ms-3 mt-3"
          src={src} // Utilisation de l'URL passée comme prop
          alt={title}
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
