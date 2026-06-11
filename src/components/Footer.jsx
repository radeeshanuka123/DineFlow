import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Dine<span>Flow</span></h2>
        <p>Fresh meals, easy ordering, and fast service.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>

      <p className="footer-copy">© 2026 DineFlow. All rights reserved.</p>
    </footer>
  );
}

export default Footer;