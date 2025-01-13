
import React from "react"
import {Link} from 'react-router-dom'
export default function Blogs() {
  const blogsPost = [
    {id:1 , titre : 'post 1'},
    {id:2 , titre : 'post 2'},
    {id:3 , titre : 'post 3'},
  ]
  return (<>
          <h2>Les blogs</h2>
          <ul>
            {
              blogsPost.map((blog,key) => (
                <li key={key}>
                   <Link to={`/blogs/${blog.id}`}> {blog.titre}</Link>
                </li>
              ))
            }
          </ul>
  </>)
}