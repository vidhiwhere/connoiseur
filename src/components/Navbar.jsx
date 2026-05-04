import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>

        <Link to="/" className="navbar-logo">
          <img
            src="/images/navbar-logo.png"
            alt="IWC Logo"
            className="navbar-logo-img"
          />
          <div className="logo-text">IndianWatchconnoisseur</div>
        </Link>

        <div className="mobile-user-icon">
          <Link to="/signin">
            <User size={24} color="#fff" />
          </Link>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/about" onClick={toggleMobileMenu}>About Us</Link>
          <Link to="/how-it-works" onClick={toggleMobileMenu}>How it Works</Link>
          <Link to="/buy" onClick={toggleMobileMenu}>Buy</Link>
          <Link to="/sell" onClick={toggleMobileMenu}>Sell</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link>
          <Link to="/testimonials" onClick={toggleMobileMenu}>Testimonials</Link>
        </div>

        <div className={`navbar-actions ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            to="/buyer"
            className="signin-link"
            style={{ color: "#e58d11", fontWeight: "bold" }}
            onClick={toggleMobileMenu}
          >
            Dashboard
          </Link>
          <Link to="/signin" className="signin-link" onClick={toggleMobileMenu}>
            Sign In
          </Link>
          <Link to="/register" className="btn-primary register-btn" onClick={toggleMobileMenu}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
