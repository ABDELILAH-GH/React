import React from "react";

import { useNavigate } from "react-router-dom";
export default function Titre2() {
  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/");
  };
  return (
    <div className="container-fluid mt-2 py-5 w-75">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-danger">Is Frontend Mentor free ?</h4>
          <p class="card-text">
            Yes, Frontend Mentor is free to join, and it provides access to a
            variety of challenges to help developers enhance their skills. The
            free tier includes numerous beginner and intermediate projects that
            you can use to build your portfolio.
            <br />
            <br />
            However, Frontend Mentor also offers a Pro membership that
            provides additional benefits, such as access to more advanced
            projects, premium resources, and features like project feedback from
            industry professionals. This membership is optional, and the free
            version is robust enough to help beginners and intermediate
            developers improve their skills and confidence in frontend
            development.
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
