import React from "react";
import { useParams } from "react-router-dom";
export default function BlogsPost() {
  const {blogId} = useParams()
  const blogsData  = {
    1:"description of post 1",
    2:"description of post 2",
    3:"description of post 3",
  }
  return (<>
         <h2>blogs post {blogId} </h2>
         <p>{blogsData[blogId] || "blogs post not found"}</p>
  </>)
}