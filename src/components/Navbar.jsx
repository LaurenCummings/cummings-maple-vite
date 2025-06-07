import '../css/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="navbar">
            <div className="logo">
                <h1>Cummings Maple</h1>
            </div>
            <div className={`${isOpen ? "links menu-open" : "links"}`}>
                <Link to="/">Products</Link>
                <Link to="/About">About Us</Link>
            </div>
            <button className="hamburger-menu" onClick={toggleMenu}>
                <FaBars />
            </button>
        </div>
    )
}

export default Navbar;