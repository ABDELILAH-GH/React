
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Nav() {
  return (
    <>
    <ul   class="nav justify-content-center  " >
      <li class="nav-item">
         <Link to='/' className='nav-link'>Home</Link>
      </li>
      <li class="nav-item">
         <Link to='/blogs' className='nav-link'>Blogs</Link>
      </li>
      <li class="nav-item">
         <Link  to='/contact' className='nav-link'>Contact</Link>
      </li>
    </ul>
    <Outlet/>
    </>
  )
}
