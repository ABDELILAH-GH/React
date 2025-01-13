import { Link, Outlet } from "react-router-dom"
export default function NavRouter() {
   return(<>
        <nav className="nav bg-dark text-light">
         <ul>
            <li><Link to = '/' className="nav-link">home</Link></li>
            <li><Link to = '/blogs' className="nav-link">blogs</Link></li>
            <li><Link to = '/contact' className="nav-link">contact</Link></li>
         </ul>
        </nav>
        <Outlet/>
   </>)
}