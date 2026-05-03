import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

const watches = [
  {
    id: 2,
    name: "Patek Philippe",
    model: "Nautilus",
    price: "1,20,00,000",
    image: "/images/watch_2.png",
  },
  {
    id: 3,
    name: "Audemars Piguet",
    model: "Royal Oak",
    price: "85,00,000",
    image: "/images/watch_3.png",
  },
  {
    id: 4,
    name: "Richard Mille",
    model: "RM 11-03",
    price: "2,50,00,000",
    image: "/images/watch_4.png",
  },
  {
    id: 5,
    name: "Vacheron Constantin",
    model: "Overseas",
    price: "45,00,000",
    image: "/images/watch_5.png",
  },
];

const Carousel = ({ title }) => {
  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <h2 className="section-title">{title}</h2>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn">
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track">
            {watches.map((watch) => (
              <div key={watch.id} className="watch-card">
                <div className="watch-image-container">
                  <img src={watch.image} alt={`${watch.name} ${watch.model}`} />
                </div>
                <div className="watch-details">
                  <h3 className="watch-brand">{watch.name}</h3>
                  <p className="watch-model">{watch.model}</p>
                  <p className="watch-price">
                    <span className="from-text">from</span> ₹ {watch.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
