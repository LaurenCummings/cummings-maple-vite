import '../css/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        isOpen ? toggleMenu() : null;
    }

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/">
                    <h1>Cummings Maple</h1>
                </Link>
            </div>
            <div className={`${isOpen ? "links menu-open" : "links"}`}>
                <Link to="/Products" onClick={closeMenu}>Products</Link>
                <Link to="/About" onClick={closeMenu}>About Us</Link>
                <Link to="/Recipes" onClick={closeMenu}>Recipes</Link>
                <Link to="/ContactUs" onClick={closeMenu}>Contact Us</Link>
            </div>
            <button className="hamburger-menu" onClick={toggleMenu}>
                {
                    isOpen ? <FaTimes /> : <FaBars />
                }
            </button>
        </div>
    )
}

export default Navbar;