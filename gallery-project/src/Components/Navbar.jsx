import { Link } from 'react-router-dom';
import "../index.css";


function Navbar() {
    return (
    <div>
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/"className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/contact" className="nav-item">Contact</Link></li>
            </ul>
        </nav>
    </div>
    );
}
export default Navbar;