import React from "react";
import {NavLink, Link} from 'react-router-dom';
import logo from "../assets/logo.png"
import { Navbar } from "../components/Navbar";
 
const setActive = ({isActive}) => isActive ? 'active-link' : '';
function Header() {
    return(
        <div className="container header">
            <Link to='/' className='logo__link'><img src={logo} className='logo'/></Link>
            <nav className="nav navigation">
                <Navbar/>
            </nav>
        </div>
    )
}

export { Header };