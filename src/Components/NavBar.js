import React from 'react'; 
import {Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
         <div className="container">
            <a  className="brand-logo">My App Website</a>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
         </div>
        </nav>
    )
}
export default NavBar 