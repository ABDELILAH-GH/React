import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function LayoutDn() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Blogs</Link></li>
        </ul>
      </nav>
        <Outlet />
    </div>
  );
}
