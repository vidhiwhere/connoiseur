import React from "react";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import "./Instagram.css";

const Instagram = () => {
  return (
    <section className="instagram-section">
      <div className="instagram-container">
        <div className="instagram-header">
          <div className="instagram-icon-wrapper">
            <InstagramIcon size={32} color="#E1306C" />
          </div>
          <h2 className="section-title">
            Follow us on
            <br />
            Instagram
          </h2>
        </div>

        <div className="instagram-grid">
          <div className="insta-post post-large">
            <img src="/images/brand_new_5.jpg" alt="Instagram Post Omega" />
          </div>
          <div className="insta-post">
            <img src="/images/brand_new_3.png" alt="Instagram Post Patek" />
          </div>
          <div className="insta-post">
            <img src="/images/brand_new_1.png" alt="Instagram Post Rolex" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
