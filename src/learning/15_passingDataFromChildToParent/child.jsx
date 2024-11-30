import React, { useRef } from 'react';

export default function P_two({ handleColor }) {
  const inputColor = useRef();

  const handleChange = () => {
    const color = inputColor.current.value; // Récupérer la couleur saisie
    handleColor(color); // Appeler la fonction fournie par le parent
  };

  return (
    <div className="container my-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          ref={inputColor}
          placeholder="Choose your color..."
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleChange}
      >
        Submit
      </button>
    </div>
  );
}
