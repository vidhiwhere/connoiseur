import React from "react";
import { ChevronRight } from "lucide-react";
import "./Brands.css";

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-header">
          <h2 className="section-title">Explore by Brands</h2>
          <button className="explore-btn">
            Explore Now <ChevronRight size={18} />
          </button>
        </div>

        <div className="brands-grid">
          <div className="brand-card card-small">
            <img src="/images/brand_new_2.png" alt="Audemars Piguet" />
          </div>
          <div className="brand-card card-small">
            <img src="/images/brand_new_4.png" alt="Cartier" />
          </div>
          <div className="brand-card card-large">
            <img src="/images/brand_new_5.jpg" alt="Omega" />
          </div>
          <div className="brand-card card-small">
            <img src="/images/brand_new_1.png" alt="Rolex" />
          </div>
          <div className="brand-card card-small">
            <img src="/images/brand_new_3.png" alt="Patek Philippe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
