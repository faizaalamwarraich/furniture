import React, { useState } from 'react';
import './navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar({ onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Elegant Elm</div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/shop" className="nav-link">Shop</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          {/* Login button visible inside dropdown on mobile */}
          <li className="mobile-login">
            <button className="login-btn">Login</button>
          </li>
        </ul>

        <div className="navbar-right">
          <button className="login-btn">Login</button>
          <FaShoppingCart className="cart-icon" onClick={onCartClick} />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
