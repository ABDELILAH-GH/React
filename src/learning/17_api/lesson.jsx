import React, { useState, useEffect } from "react";

export default function Api() {
  const [products, setProducts] = useState([]);

  // Charger les produits depuis l'API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Fonction pour afficher les produits sous forme de cartes
  const displayProduct = () => {
    return products.map((item, key) => (
      <div className="card m-2" key={key} style={{ width: "10rem" }}>
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
          <strong>description:</strong>{item.description.slice(0, 50)}...
          </p>
          <p className="card-text">
            <strong>Prix:</strong> ${item.price}
          </p>
          <p className="card-text">
            <strong>Catégorie:</strong> {item.category}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="container w-75 mt-3">
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center">
          {displayProduct()}
        </div>
      </div>
      
    </div>
  );
}
