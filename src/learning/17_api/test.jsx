import { useEffect, useRef, useState } from "react"
import './style.css'
export default function Diaf(){
   const [product,setProduct] = useState([])
   const inputSearch = useRef()
   useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then (data => setProduct(data))
   },[])

const handleSearch = (e) => {
   e.preventDefault()
   const searchValue = inputSearch.current.value.toLowerCase()
   const productFilter = product.filter(item => 
       item.description.toLowerCase().includes(searchValue)
   )
   setProduct(productFilter)
}
const handleReset = (e) =>  {
   e.preventDefault()
   setProduct([])
   inputSearch.current.value = ''
}
const displayProduct = () => {
return product.map((item,key)=>(
   <div class="card justify-content-center mt-4 ms-4" key={key} style={{width : "400px"}}>
      <img class="card-img m-auto" src={item.image} alt="Title" style={{height : '200px', width : "200px"}}/>
      <div class="card-body">
         <h4 class="card-title">{item.title}</h4>
         <p class="card-text"><strong>Description: </strong>{item.description.slice(0,200)}...</p>
         <p className="card-text"><strong>Category: </strong>{item.category}</p>
         <p className="card-text"><strong>Price: </strong>{item.price}</p>
      </div>
   </div>
   
))
}
   return (
      <div className="container w-75 mt-2">
      <div className="header d-flex align-items-center">
            <div className="input-group">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Type something about the product..."
                  ref={inputSearch}
               />
               <button type="submit" className="btn btn-success" onClick={handleSearch}>
                  Search
               </button>
               <button type="button " className="btn btn-warning" onClick={handleReset}>
                  Reset
               </button>
            </div>
         </div>
      <div className="row">
         <div className="d-flex flex-wrap justify-content-center">
            {product.length > 0 ? displayProduct() : "No products !!"}
         </div>
      </div>
   </div>
   
   )
}