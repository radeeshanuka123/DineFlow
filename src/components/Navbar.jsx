import { Link, NavLink } from "react-router-dom";
import { FiHome, FiShoppingBag, FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="modern-navbar">
      <Link to="/" className="nav-logo">
        <img src="/logo.png" alt="DineFlow" />
      </Link>

      <div className="modern-nav-links">
        <NavLink to="/">
          <FiHome />
          <span>Home</span>
        </NavLink>

        <NavLink to="/foods">
          <FiShoppingBag />
          <span>Foods</span>
        </NavLink>

        <NavLink to="/cart">
          <FiShoppingCart />
          <span>Cart</span>
        </NavLink>

        <NavLink to="/login" className="login-pill">
          <FiUser />
          <span>Login</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;