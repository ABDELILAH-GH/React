import React, { useState, useEffect } from 'react';

export default function Api() {
  const [products, setProducts] = useState([]);

  // Utilisation de useEffect pour charger les données une seule fois après le premier rendu
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []);  // Le tableau vide [] assure que l'effet ne se déclenche qu'une fois lors du montage du composant

  // Fonction pour afficher les produits
  const displayProduct = () => {
    return products.map((item, key) => (
      <tr key={key}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.description.slice(1,50)}</td>
        <td>{item.category}</td>
        <td><img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} /></td>
        <td>{item.rating.rate}</td>
      </tr>
    ));
  };

  return (
    <div className='container w-80 mt-4'>
      <div className="table-responsive">
        <table className="table">
          <thead className="table table-warning">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {displayProduct()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
