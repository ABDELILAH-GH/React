import React from "react";

import { useNavigate } from "react-router-dom";
export default function Mentor() {
  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/");
  };
  return (
    <div className="container-fluid mt-2 py-5 w-75">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-danger"> What is Frontend Mentor ?</h4>
          <p>
            Frontend Mentor est une plateforme en ligne dédiée à aider les
            développeurs front-end à améliorer leurs compétences de codage en
            leur fournissant des défis pratiques basés sur des projets réels.
            <br />
            Ces projets couvrent divers aspects du développement web, en
            particulier HTML, CSS et JavaScript, et sont conçus pour être
            adaptés à tous les niveaux d'expérience, des débutants aux
            développeurs plus avancés.
            <br />
            Chaque défi présente une maquette de site web ou d'application
            mobile avec des spécifications claires, permettant aux utilisateurs
            de recréer des designs professionnels tout en respectant des
            exigences précises.
            <br />
            Les utilisateurs peuvent travailler sur des projets variés qui vont
            des sites web simples aux applications plus complexes, ce qui les
            aide à renforcer leur compréhension des technologies web
            essentielles et à acquérir une expérience pratique dans la
            résolution de problèmes réels de développement.
            <br />
            Frontend Mentor est également idéal pour ceux qui cherchent à
            constituer un portfolio solide, car il permet de démontrer leurs
            compétences en codage avec des projets tangibles et visuellement
            attrayants qui peuvent être partagés avec des employeurs ou utilisés
            dans des entretiens.
            <br />
            En plus des défis, la plateforme offre une communauté active où les
            développeurs peuvent poser des questions, échanger des conseils, et
            s'entraider pour surmonter les obstacles.
            <br />
            Pour les développeurs débutants, c'est une excellente manière
            d'apprendre et de se perfectionner, tandis que pour les plus
            expérimentés, cela offre l'opportunité de tester leurs compétences
            et de maintenir leur niveau en travaillant sur des projets
            continuellement mis à jour.
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
