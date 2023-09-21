import React from 'react';
import { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';


function Navbar () {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            <div className="burger-icon" onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul id="nav-mobile" className="menu right hide-on-med-and-down nav__list">
                <li className="nav__item">
                <NavLink to='/' className="nav__link">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='nav__link'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/services' className='nav__link'>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/project' className='nav__link'>Project</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='nav__link'>Contact</NavLink>
                </li>
            </ul>  
        </div>
    )

}
export {Navbar};