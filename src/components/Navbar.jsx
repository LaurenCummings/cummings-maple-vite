import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Cummings Maple</h1>
            </div>
            <div className="links">
                <Link to="/">Products</Link>
                <Link to="/About">About Us</Link>
            </div>
        </div>
    )
}

export default Navbar;