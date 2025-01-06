import React from "react";
import { Link } from "react-router-dom";

export default function BlogsDn() {
  const blogPosts = [
    { id: 1, title: "Understanding React Router" },
    { id: 2, title: "Learn React Hooks" },
    { id: 3, title: "State Management with Redux" },
  ];

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blogs/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
