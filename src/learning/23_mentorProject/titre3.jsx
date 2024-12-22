import React from "react";

import { useNavigate } from "react-router-dom";
export default function Titre3() {
  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/");
  };
  return (
    <div className="container-fluid mt-2 py-5 w-75">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-danger">Can I use Frontend Mentor projects in my portfolio?</h4>
          <p class="card-text">
            Yes, you can absolutely use Frontend Mentor projects in your
            portfolio! These challenges are designed to help developers build
            real-world projects that showcase their skills in HTML, CSS,
            JavaScript, and other technologies.
            <br />
            <br />
            By completing these projects, you can demonstrate your ability to
            implement responsive designs, solve coding problems, and follow best
            practices in frontend development. Additionally, these projects are
            perfect for showing potential employers or clients your creativity
            and attention to detail.
            <br />
            <br />
            Don’t forget to customize the projects to reflect your personal
            style or unique touch. This will make your portfolio stand out even
            more and show that you can adapt templates to suit specific needs.
          </p>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={handleRetourClick}
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}
