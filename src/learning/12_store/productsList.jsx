import { useEffect, useState } from "react";
import Products from "./produts";
import "./style.css";

export default function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategoriesList] = useState([]);


  const [searchInput, setSearchInput] = useState("");
  const [searchButton, setSearchButton] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  };
  const handleButton = (e) => {
    e.preventDefault();
    setSearchButton(searchInput)
  };

  const handleRest = (e) => {
    e.preventDefault();
    setSearchInput(""); // reinitialise le champ de recherche
  };

  const displayCategories = () => {
    return categories.map((category) => (
      <button>{category}</button>
    ));
  };

  const displayProducts = () => {
    const filteredProducts = productsList.filter(
      (product) =>
        product.title.includes(searchInput) ||
        product.id.toString().includes(searchInput) ||
        product.description.includes(searchInput)  ||
        product.price.toString().includes(searchInput)  
   
    );
    if (productsList.length > 0) {
      return filteredProducts.map((product, productKey) => (
        <Products product={product} key={productKey} />
      ));
    }
    return (
      <tr>
        <td colSpan={7}>No items</td>
      </tr>
    );
  };

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProductsList(response));
  };
  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => setCategoriesList(response));
  };

  useEffect(() => {
    getProducts(); // Recupere les produits au montage du composant
    getCategories();
  }, []);

  return (
    <div className="container-fluix mx-auto w-75 my-3">
      <h2>Search :</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="search"
            onChange={handleSearch}
            value={searchInput}
            className="input-search"
            placeholder="Search products..."
          />
          <input
            type="submit"
            value="search"
            onClick={handleButton}
            className="btn"
          />
          <input
            type="submit"
            value="rest"
            onClick={handleRest}
            className="btn btn-reset"
          />
        </div>
        <h4>Categories:</h4>
        <div className="categories-container">
         {displayCategories()}
         </div>
      </form>

      <h1>Listes des produits :</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>{displayProducts()}</tbody>
        </table>
      </div>
    </div>
  );
}
