import { Link } from 'react-router-dom';
import "../index.css";


function Navbar() {
    return (
    <div>
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/"className="nav-item">Home</Link></li>
                <li><Link to="/shop" className="nav-item">Shop</Link></li>
                <li><Link to="/contact" className="nav-item">Contact</Link></li>
                <li><Link to="/colorpicker" className="nav-item">Color Picker</Link></li>
            </ul>
        </nav>
    </div>
    );
}
export default Navbar;