import React, { useState } from "react";
import { X } from "lucide-react";
import "./BuyerComponents.css";

const WATCH_IMAGES = [
  "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=400&q=80",
];

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Rolex",
    model: "Sky Dweller",
    price: "23,00,000",
    img: WATCH_IMAGES[0],
  },
  {
    id: 2,
    name: "Rolex",
    model: "Sky Dweller",
    price: "23,00,000",
    img: WATCH_IMAGES[1],
  },
  {
    id: 3,
    name: "Rolex",
    model: "Sky Dweller",
    price: "23,00,000",
    img: WATCH_IMAGES[2],
  },
  {
    id: 4,
    name: "Rolex",
    model: "Sky Dweller",
    price: "23,00,000",
    img: WATCH_IMAGES[3],
  },
  {
    id: 5,
    name: "Rolex",
    model: "Sky Dweller",
    price: "23,00,000",
    img: WATCH_IMAGES[4],
  },
  {
    id: 6,
    name: "Rolex",
    model: "Sky Dweller",
    price: "23,00,000",
    img: WATCH_IMAGES[5],
  },
];

const Wishlist = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [removeTarget, setRemoveTarget] = useState(null);

  const openModal = (item) => setRemoveTarget(item);
  const closeModal = () => setRemoveTarget(null);

  const confirmRemove = () => {
    setItems((prev) => prev.filter((i) => i.id !== removeTarget.id));
    closeModal();
  };

  return (
    <div>
      <div className="dashboard-header" style={{ marginBottom: "20px" }}>
        <h4>Wishlist</h4>
        <h1>Good Morning, Arjun</h1>
      </div>

      {items.length === 0 ? (
        <div className="wishlist-empty">
          <p>Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {items.map((item) => (
            <div key={item.id} className="wishlist-card">
              <button className="remove-btn" onClick={() => openModal(item)}>
                <X size={16} strokeWidth={2} />
              </button>

              <div className="wishlist-img-container">
                <img src={item.img} alt={`${item.name} ${item.model}`} />
              </div>

              <div className="wishlist-row" style={{ marginBottom: "2px" }}>
                <strong>{item.name}</strong>
                <span className="price">from ₹ {item.price}</span>
              </div>
              <p className="model-text">{item.model}</p>

              <div className="wishlist-actions">
                <button className="btn-secondary">Buy Now</button>
                <button className="btn-primary">Make Offer</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {}
      {removeTarget && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={20} strokeWidth={2} />
            </button>
            <h2>Remove from Wishlist?</h2>
            <p>
              <strong>
                {removeTarget.name} {removeTarget.model}
              </strong>{" "}
              will be removed from your wishlist. You can always save it again
              from the shop.
            </p>
            <div className="modal-buttons">
              <button className="btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn-primary" onClick={confirmRemove}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
