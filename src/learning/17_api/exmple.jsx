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
      <div className="col-md-4 col-sm-6 col-lg-3 mb-4" key={key}>
        <div
          className="card shadow-sm h-100"
          style={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <img
            className="card-img-top"
            src={item.image}
            alt="Title"
            style={{ height: "200px", objectFit: "contain" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate" title={item.title}>
              {item.title}
            </h5>
            <p className="card-text text-muted small">
              {item.description.length > 100
                ? `${item.description.substring(0, 100)}...`
                : item.description}
            </p>
            <p className="mb-1">
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <button className="btn btn-outline-primary mt-auto btn-sm">
              View Details
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-4">
        <input
          type="text"
          className="form-control me-3 shadow-sm"
          id="search"
          ref={inputSearch}
          placeholder="Search products by description..."
          style={{ borderRadius: "5px" }}
        />
        <button
          type="button"
          className="btn btn-primary shadow-sm"
          onClick={handleFilterProducts}
        >
          Search
        </button>
      </div>
      <div className="row">
        {products.length > 0 ? (
          displayProduct()
        ) : (
          <div className="text-center w-100">
            <p className="text-muted">No products found!</p>
          </div>
        )}
      </div>
    </div>
  );
}
