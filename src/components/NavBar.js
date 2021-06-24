import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";

function NavBar(props) {
    const shoppingCartStyle = { fontSize: "1.3rem", color: props.textColor };
    const navStyle = { backgroundColor: props.backgroundColor };
    const navTextStyle = { color: props.textColor };

    return (
        <nav style={navStyle}>
            <Link className="logo" style={navTextStyle} to="/">transform.</Link>
            <ul id="nav-pgs-links">
                <li>
                    <Link style={navTextStyle} to="/all">All</Link>
                </li>
                <li>
                    <Link style={navTextStyle} to="/women">Women's Clothing</Link>
                </li>
                <li>
                    <Link style={navTextStyle} to="/men">Men's Clothing</Link>
                </li>
                <li>
                    <Link style={navTextStyle} to="/jewelry">Jewelry</Link>
                </li>
                <li>
                    <Link style={navTextStyle} to="/electronics">Electronics</Link>
                </li>
            </ul>
            <Link className="cart-link" to="/">
                <span className="cart-total-items" style={navTextStyle}>23</span>
                <span><BiCartAlt style={shoppingCartStyle} /></span>
            </Link>
        </nav>
    );
}
  
export default NavBar;