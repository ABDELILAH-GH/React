import Rating from "./rating"
export default function Products ({product}) {
   console.log(product)
   return <tr>
               <td >{product.id}</td>
               <td >{product.title}</td>
               <td >{product.price}</td>
               <td >{product.description.slice(0,100)}...</td>
               <td >{product.category}</td>
               <td ><img width = '200'src={product.image} alt= {product.title}/></td>
               <td><Rating rate={product.rating.rate}  count={product.rating.count}/></td>
         </tr>
}