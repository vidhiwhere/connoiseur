import React from "react";
import { Trash2, Heart, Check, ShieldCheck, Truck } from "lucide-react";
import "./BuyerComponents.css";

const Cart = ({ setCheckoutStep }) => {
  return (
    <div>
      <div className="dashboard-header" style={{ marginBottom: "8px" }}>
        <h1 style={{ fontSize: "32px", margin: 0 }}>Your Cart</h1>
        <p style={{ color: "#666", marginTop: "8px" }}>
          Review your selected watches before checkout
        </p>
      </div>

      <div className="checkout-layout" style={{ marginTop: "32px" }}>
        <div className="checkout-main">
          <div className="cart-item">
            <div className="cart-item-img">
              <img
                src="/images/brand_new_1.png"
                alt="Rolex Submariner"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-title">
                <h3>Rolex Submariner Date</h3>
                <span className="cart-item-price">₹ 14,50,000</span>
              </div>
              <div className="cart-item-meta">
                REF. 126610LN • CONDITION: MINT
              </div>
              <div className="cart-item-actions">
                <button className="action-link">
                  <Trash2 size={14} strokeWidth={2} /> REMOVE
                </button>
                <button className="action-link">
                  <Heart size={14} strokeWidth={2} /> MOVE TO WISHLIST
                </button>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-img">
              <img
                src="/images/behind_1.png"
                alt="Patek Philippe"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-title">
                <h3>Patek Philippe Calatrava</h3>
                <span className="cart-item-price">₹ 28,20,000</span>
              </div>
              <div className="cart-item-meta">
                REF. 5196J-001 • CONDITION: EXCELLENT
              </div>
              <div className="cart-item-actions">
                <button className="action-link">
                  <Trash2 size={14} strokeWidth={2} /> REMOVE
                </button>
                <button className="action-link">
                  <Heart size={14} strokeWidth={2} /> MOVE TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-sidebar">
          <div
            style={{
              display: "flex",
              gap: "8px",
              color: "#888",
              fontSize: "12px",
              marginBottom: "24px",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            <span>INSURED EXPRESS SHIPPING INCLUDED FOR ALL ORDERS</span>
            <div style={{ flex: 1 }}></div>
            <Check size={16} strokeWidth={2} />
            <ShieldCheck size={16} strokeWidth={2} />
            <Truck size={16} strokeWidth={2} />
          </div>

          <h3
            style={{
              fontSize: "14px",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: "24px",
              letterSpacing: "0.5px",
            }}
          >
            Order Summary
          </h3>

          <div className="order-summary-row">
            <span>Subtotal</span>
            <span style={{ color: "#1a1a1a", fontWeight: "500" }}>
              ₹ 42,70,000
            </span>
          </div>
          <div className="order-summary-row">
            <span>Platform Fees</span>
            <span style={{ color: "#1a1a1a", fontWeight: "500" }}>
              ₹ 12,500
            </span>
          </div>
          <div className="order-summary-row">
            <span>Shipping & Insurance</span>
            <span style={{ color: "#0066cc", fontWeight: "500" }}>
              Complimentary
            </span>
          </div>

          <div className="order-summary-total">
            <p>TOTAL AMOUNT</p>
            <h2>₹ 42,82,500</h2>
            <p
              style={{
                fontSize: "10px",
                textTransform: "none",
                marginTop: "4px",
              }}
            >
              Inclusive of all duties and taxes
            </p>
          </div>

          <button
            className="btn-primary btn-block"
            style={{ padding: "16px" }}
            onClick={() => setCheckoutStep("Checkout")}
          >
            PROCEED TO CHECKOUT →
          </button>
          <button
            className="btn-secondary btn-block"
            style={{
              padding: "16px",
              background: "#eaeaea",
              border: "none",
              color: "#1a1a1a",
            }}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
