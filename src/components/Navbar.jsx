import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Products</Link>
                <Link to="/About">About Us</Link>
            </div>
        </div>
    )
}

export default Navbar;