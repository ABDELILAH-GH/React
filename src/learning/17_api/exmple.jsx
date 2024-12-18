import React, { useEffect, useRef, useState } from "react";

export default function Card() {
  const [products, setProducts] = useState([]); 
  const inputSearch = useRef(); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((product) => setProducts(product));
  }, []); 

  const handleFilterProducts = () => {
    const valueOfSearchInput = inputSearch.current.value.toLowerCase(); 
    const filteredProducts = products.filter((item) =>
      item.description.toLowerCase().includes(valueOfSearchInput)
    ); 
    setProducts(filteredProducts); // Mettre à jour les produits affichés
  };

  const displayProduct = () => {
    return products.map((item, key) => (
      <div
        className="card mt-4 ms-4 justify-content-center"
        key={key}
        style={{ width: "20rem" }}
      >
        <img
          className="card-img-top"
          src={item.image}
          alt="Title"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h4 className="card-title">
            <strong>Title:</strong> {item.title}
          </h4>
          <p className="card-text">
            <strong>Description:</strong> {item.description}
          </p>
          <p className="card-text">
            <strong>Price:</strong> {item.price}
          </p>
          <p className="card-text">
            <strong>Category:</strong> {item.category}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="container w-75 mt-2">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="search"
          ref={inputSearch} 
        />
      </div>
      <button
        type="button"
        className="btn btn-success w-100"
        onClick={handleFilterProducts} 
      >
        Search
      </button>

      <div className="row">
        <div className="d-flex flex-wrap justify-content-center">
          {products.length > 0 ? displayProduct() : <p>No products !!</p>}
        </div>
      </div>
    </div>
  );
}
