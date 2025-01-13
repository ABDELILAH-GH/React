import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav bg-dark text-light">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              blogs
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
