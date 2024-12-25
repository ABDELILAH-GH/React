import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import bg from "./images/background-pattern-desktop.svg";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const handleTitre2 = () => {
    navigate("/home/titre2");
  };

  const handleTitre3 = () => {
    navigate("/home/titre2/titre3");
  };

  const handleTitre4 = () => {
    navigate("/home/titre2/titre3/titre4");
  };

  return (
    <div
      className="bg-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30vh", 
        width: "100%",

      }}
    >
      <div
        className="card-body"
        style={{
          width: "50%", 
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
        }}
      >
        <div className="d-flex justify-content-center mb-4">
          <h1 className="mb-0">FAQs</h1>
        </div>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                onClick={handleClick}
              >
                What is Frontend Mentor, and how will it help me?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their...
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                onClick={handleTitre2}
              >
                Is Frontend Mentor free?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            ></div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                onClick={handleTitre3}
                aria-controls="collapseThree"
              >
                Can I use Frontend Mentor projects in my portfolio?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body"></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                onClick={handleTitre4}
              >
                How can I get help if I'm stuck on a challenge?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
