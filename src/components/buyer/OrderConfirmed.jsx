import React from "react";
import { Check, Truck } from "lucide-react";
import "./BuyerComponents.css";

const OrderConfirmed = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <div
        className="content-card"
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            background: "#fdf6ed",
            color: "#e58d11",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <Check size={32} strokeWidth={3} />
        </div>

        <h1 style={{ margin: "0 0 8px 0", fontSize: "28px" }}>
          Order Confirmed
        </h1>
        <p
          style={{
            margin: "0 0 4px 0",
            color: "#1a1a1a",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Your order has been placed successfully
        </p>
        <p style={{ margin: "0 0 32px 0", color: "#888", fontSize: "14px" }}>
          Your order has been successfully placed
        </p>

        <div
          style={{
            background: "#f9f9f9",
            borderRadius: "12px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "white",
              borderRadius: "8px",
              padding: "8px",
              border: "1px solid #eaeaea",
            }}
          >
            <img
              src="/images/behind_1.png"
              alt="Patek Philippe"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "18px" }}>
              Patek Philippe Calatrava
            </h3>
            <h2
              style={{
                margin: "0 0 8px 0",
                color: "#e58d11",
                fontSize: "20px",
              }}
            >
              ₹28,20,000
            </h2>
            <div
              style={{
                display: "flex",
                gap: "16px",
                color: "#666",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              <span>ID: #ORD-99021</span>
              <span>•</span>
              <span>24 OCT 2023</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            textAlign: "left",
            marginBottom: "32px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "11px",
                color: "#888",
                letterSpacing: "1px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              DELIVERY DETAILS
            </h4>
            <p style={{ margin: "0 0 4px 0", fontWeight: "bold" }}>
              Anand Sharma
            </p>
            <p style={{ margin: "0 0 4px 0", color: "#555", fontSize: "13px" }}>
              22nd Baker Street, London NW1 6XE
            </p>
            <p style={{ margin: "0 0 4px 0", color: "#555", fontSize: "13px" }}>
              Mumbai, Maharashtra, 400001
            </p>
            <p
              style={{
                margin: "0",
                color: "#1a1a1a",
                fontWeight: "500",
                fontSize: "13px",
              }}
            >
              +91 98765 43210
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h4
              style={{
                fontSize: "11px",
                color: "#888",
                letterSpacing: "1px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              PAYMENT DETAILS
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#555", fontSize: "13px" }}>Method</span>
              <strong style={{ fontSize: "13px" }}>UPI (PhonePe)</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#555", fontSize: "13px" }}>Status</span>
              <span
                style={{
                  background: "#38a169",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  letterSpacing: "0.5px",
                }}
              >
                PAID
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#f0f9ff",
            border: "1px solid #e0f2fe",
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            gap: "12px",
            textAlign: "left",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#0284c7" }}>
            <Truck size={20} strokeWidth={2} />
          </span>
          <div>
            <p
              style={{
                margin: "0 0 4px 0",
                color: "#1a1a1a",
                fontWeight: "500",
                fontSize: "13px",
              }}
            >
              Your order will be processed and shipped soon
            </p>
            <p
              style={{
                margin: 0,
                color: "#0284c7",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              Estimated Delivery: 28 Oct 2023
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <button className="btn-primary" style={{ flex: 1, padding: "14px" }}>
            View Order
          </button>
          <button
            className="btn-secondary"
            style={{
              flex: 1,
              padding: "14px",
              background: "#eaeaea",
              border: "none",
              color: "#1a1a1a",
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
