import React from "react";
import { ChevronRight } from "lucide-react";
import "./BehindTheDial.css";

const BehindTheDial = () => {
  return (
    <section className="behind-dial-section">
      <div className="behind-dial-container">
        <div className="dial-header">
          <div>
            <h2 className="section-title">BEHIND THE DIAL</h2>
            <p className="dial-subtitle">
              Explore the art, stories, and craftsmanship behind every luxury
              timepiece.
            </p>
          </div>
          <button className="read-more-btn">
            Read More <ChevronRight size={18} />
          </button>
        </div>

        <div className="dial-grid">
          <div className="dial-image img-wide">
            <img src="/images/behind_1.png" alt="Behind the dial wide" />
          </div>
          <div className="dial-image img-small">
            <img src="/images/behind_2.png" alt="Craftsmanship detail 1" />
          </div>
          <div className="dial-image img-small">
            <img src="/images/behind_4.png" alt="Craftsmanship detail 2" />
          </div>
          <div className="dial-image img-small">
            <img src="/images/behind_2.png" alt="Craftsmanship detail 3" />
          </div>
          <div className="dial-image img-tall">
            <img src="/images/behind_3.png" alt="Tall showcase" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheDial;
