import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="/images/navbar-logo.png"
            alt="IWC Logo"
            className="navbar-logo-img"
          />
          <div className="logo-text">IndianWatchconnoisseur</div>
        </Link>

        <div className="navbar-links">
          <Link to="/about">About Us</Link>
          <Link to="/how-it-works">How it Works</Link>
          <Link to="/buy">Buy</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>

        <div className="navbar-actions">
          <Link
            to="/buyer"
            className="signin-link"
            style={{ color: "#e58d11", fontWeight: "bold" }}
          >
            Dashboard
          </Link>
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
          <Link to="/register" className="btn-primary register-btn">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
