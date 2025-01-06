import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { blogId } = useParams();

  // Simulated blog data for demonstration
  const blogData = {
    1: "This is a detailed article about React Router.",
    2: "Learn about React Hooks and how they simplify state management.",
    3: "Explore how to use Redux for state management in large applications.",
  };

  return (
    <div>
      <h1>Blog Post {blogId}</h1>
      <p>{blogData[blogId] || "Blog post not found."}</p>
    </div>
  );
}
