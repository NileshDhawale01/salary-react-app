import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="logo">BANK LOGO</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to={"/allemployees"}>Home</Link></li>
                    <li><Link to={"/addEmployee"}>About</Link></li>
                    <li><Link to={"/salary"}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
