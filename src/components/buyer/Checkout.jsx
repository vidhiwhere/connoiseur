import React, { useState } from "react";
import { Lock, Smartphone, CreditCard, Landmark } from "lucide-react";
import "./BuyerComponents.css";

const Checkout = ({ setCheckoutStep }) => {
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  return (
    <div>
      <div
        className="dashboard-header"
        style={{
          marginBottom: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", margin: 0 }}>Checkout</h1>
        <span
          style={{
            color: "#888",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Lock size={16} strokeWidth={2} /> Secure Checkout
        </span>
      </div>

      <div className="checkout-layout">
        <div className="checkout-main">
          {}
          <div className="step-container">
            <div className="step-header">
              <div className="step-number">1</div>
              <h3>Contact Information</h3>
            </div>
            <div
              className="content-card"
              style={{ padding: "24px", margin: 0 }}
            >
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="form-input"
                  value="alexander.vaughn@heritage.com"
                  readOnly
                />
              </div>
            </div>
          </div>

          {}
          <div className="step-container">
            <div className="step-header">
              <div className="step-number">2</div>
              <h3>Delivery Address</h3>
            </div>
            <div
              className="content-card"
              style={{ padding: "24px", margin: 0 }}
            >
              <div className="form-group">
                <label className="form-label">FULL NAME</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Recipient Name"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">PHONE NUMBER</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">PINCODE</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="6-digit code"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">ADDRESS LINE</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Suite, Villa, or Street Name"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">CITY</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="City"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">STATE</label>
                  <select className="form-select">
                    <option>Maharashtra</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "16px",
                }}
              >
                <input type="checkbox" id="save-addr" />
                <label
                  htmlFor="save-addr"
                  style={{ fontSize: "13px", color: "#1a1a1a" }}
                >
                  Save this address for future curated acquisitions
                </label>
              </div>
            </div>
          </div>

          {}
          <div className="step-container">
            <div className="step-header">
              <div className="step-number">3</div>
              <h3>Payment Method</h3>
            </div>

            <div
              className={`payment-method ${paymentMethod === "UPI" ? "active" : ""}`}
              onClick={() => setPaymentMethod("UPI")}
            >
              <div className="payment-radio"></div>
              <div className="payment-label">
                UPI (PhonePe, Google Pay, BHIM)
              </div>
              <div className="payment-icon">
                <Smartphone size={20} strokeWidth={1.5} />
              </div>
            </div>

            <div
              className={`payment-method ${paymentMethod === "Card" ? "active" : ""}`}
              onClick={() => setPaymentMethod("Card")}
            >
              <div className="payment-radio"></div>
              <div className="payment-label">Credit / Debit Card</div>
              <div className="payment-icon">
                <CreditCard size={20} strokeWidth={1.5} />
              </div>
            </div>

            <div
              className={`payment-method ${paymentMethod === "NetBanking" ? "active" : ""}`}
              onClick={() => setPaymentMethod("NetBanking")}
            >
              <div className="payment-radio"></div>
              <div className="payment-label">Net Banking</div>
              <div className="payment-icon">
                <Landmark size={20} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {}
          <div style={{ marginTop: "40px" }}>
            <h4
              style={{
                fontSize: "12px",
                color: "#1a1a1a",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontWeight: "bold",
              }}
            >
              ITEM IN YOUR VAULT
            </h4>
            <div
              className="content-card"
              style={{
                padding: "16px",
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#000",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <img
                  src="/images/behind_3.png"
                  alt="Watch"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    color: "#e58d11",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    margin: "0 0 4px 0",
                    fontWeight: "bold",
                  }}
                >
                  VACHERON CONSTANTIN
                </p>
                <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>
                  Patrimony Retrograde Day-Date
                </h4>
                <p style={{ margin: 0, fontWeight: "500" }}>₹ 38,45,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-sidebar">
          <h3
            style={{ fontSize: "16px", color: "#1a1a1a", marginBottom: "24px" }}
          >
            Order Summary
          </h3>

          <div className="order-summary-row">
            <span>Subtotal</span>
            <span style={{ color: "#1a1a1a" }}>₹ 38,45,000.00</span>
          </div>
          <div className="order-summary-row">
            <span>Platform Fee (Luxury Concierge)</span>
            <span style={{ color: "#1a1a1a" }}>₹ 2,500.00</span>
          </div>
          <div className="order-summary-row">
            <span>Insured Express Shipping</span>
            <span style={{ color: "#0066cc" }}>Complimentary</span>
          </div>

          <div
            className="order-summary-total"
            style={{
              borderTop: "1px solid #eaeaea",
              paddingTop: "24px",
              marginTop: "24px",
              marginBottom: "32px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                color: "#1a1a1a",
                textTransform: "uppercase",
                fontWeight: "bold",
                letterSpacing: "0.5px",
              }}
            >
              TOTAL AMOUNT
            </p>
            <h2
              style={{
                margin: "8px 0 0 0",
                fontSize: "28px",
                color: "#1a1a1a",
              }}
            >
              ₹ 38,47,500.00
            </h2>
          </div>

          <button
            className="btn-primary btn-block"
            style={{ padding: "16px", fontSize: "16px" }}
            onClick={() => setCheckoutStep("OrderConfirmed")}
          >
            Pay Now
          </button>
          <button
            className="btn-secondary btn-block"
            style={{
              padding: "16px",
              background: "#eaeaea",
              border: "none",
              color: "#1a1a1a",
              marginTop: "12px",
            }}
            onClick={() => setCheckoutStep("Cart")}
          >
            Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
