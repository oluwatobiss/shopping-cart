import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";

function NavBar() {
    const shoppingCartStyle = {
        fontSize: "1.3rem",
    }
    return (
        <nav>
            <Link className="logo" to="/">transform.</Link>
            <ul id="nav-pgs-links">
                <li>
                    <Link to="/all">All</Link>
                </li>
                <li>
                    <Link to="/women">Women's Clothing</Link>
                </li>
                <li>
                    <Link to="/men">Men's Clothing</Link>
                </li>
                <li>
                    <Link to="/jewelry">Jewelry</Link>
                </li>
                <li>
                    <Link to="/electronics">Electronics</Link>
                </li>
            </ul>
            <Link className="cart-link" to="/">
                <span className="cart-total-items">23</span>
                <span><BiCartAlt style={shoppingCartStyle} /></span>
            </Link>
        </nav>
    );
}
  
export default NavBar;