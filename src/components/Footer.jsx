import React from "react";
import {
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaTwitter as Twitter,
  FaFacebook as Facebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/images/footer-logo.png"
                alt="Indian Watch Connoisseur Logo"
              />
            </div>
            <div className="social-links">
              <a href="#">
                <Instagram size={20} />
              </a>
              <a href="#">
                <Youtube size={20} />
              </a>
              <a href="#">
                <Twitter size={20} />
              </a>
              <a href="#">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Buy</h4>
              <Link to="/buy/new">New watches</Link>
              <Link to="/buy/pre-owned">Pre-owned</Link>
              <Link to="/buy/like-new">Like New</Link>
            </div>
            <div className="footer-column">
              <h4>Sell</h4>
              <Link to="/how-it-works">How it Works</Link>
              <Link to="/sell">Sell your Watch</Link>
            </div>
            <div className="footer-column">
              <h4>Media</h4>
              <Link to="/blogs">Blogs & Articles</Link>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faqs">FAQs</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} Indian Watch Connoisseur. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
