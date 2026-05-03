import React, { useState } from "react";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Circle,
  Copy,
} from "lucide-react";
import "./BuyerComponents.css";

const transitSteps = [
  {
    label: "Order Confirmed",
    sub: "Payment Complete",
    date: "29-01-2026 · 3:42 PM",
    status: "done",
  },
  {
    label: "Seller Notified",
    sub: "Dispatch requested",
    date: "29-01-2026 · 3:50 PM",
    status: "done",
  },
  {
    label: "Watch in transit",
    sub: "Dispatch via BlueDart",
    date: "31-01-2026 · 1:42 PM",
    status: "active",
  },
  {
    label: "Delivery Confirmed",
    sub: "Expected 03 Feb 2026",
    date: null,
    status: "pending",
  },
];

const OrderHistory = () => {
  const [transitExpanded, setTransitExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("BD-9876543210");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="dashboard-header">
        <h4>Order History</h4>
        <h1>Good Morning, Arjun</h1>
      </div>

      {}
      <div className="content-card" style={{ padding: 0, overflow: "hidden" }}>
        <div
          className="card-header list-header"
          style={{
            borderRadius: "12px 12px 0 0",
            margin: 0,
            padding: "16px 24px",
          }}
        >
          <h3>In Transit</h3>
          <div className="sort-control">
            Sort{" "}
            <span className="sort-icon">
              <ArrowUpDown size={14} strokeWidth={2} />
            </span>
          </div>
        </div>

        {}
        <div
          className="transit-summary-row"
          onClick={() => setTransitExpanded((prev) => !prev)}
        >
          <div className="transit-summary-left">
            <div
              className="product-thumb"
              style={{ width: 48, height: 48, flexShrink: 0 }}
            ></div>
            <div>
              <p className="transit-title">
                <strong>Rolex</strong> Skydweller · M336934-0002 ·{" "}
                <span className="transit-status-inline">In transit</span>
              </p>
              <p className="transit-meta">
                refxxxxxxxxxx · Placed on 29-01-2026 · ₹27,00,000
              </p>
            </div>
          </div>
          <span className="expand-icon">
            {transitExpanded ? (
              <ChevronUp size={18} strokeWidth={2} />
            ) : (
              <ChevronDown size={18} strokeWidth={2} />
            )}
          </span>
        </div>

        {}
        {transitExpanded && (
          <div className="transit-expanded-panel">
            {}
            <div className="transit-timeline">
              {transitSteps.map((step, i) => (
                <div key={i} className={`timeline-step ${step.status}`}>
                  <div className="timeline-dot-col">
                    <div className={`timeline-dot dot-${step.status}`}></div>
                    {i < transitSteps.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <div className="timeline-text">
                    <p
                      className={`timeline-label ${step.status === "pending" ? "pending-label" : ""}`}
                    >
                      {step.label}
                    </p>
                    <p className="timeline-sub">{step.sub}</p>
                    {step.date && <p className="timeline-date">{step.date}</p>}
                  </div>
                </div>
              ))}
            </div>

            {}
            <div className="transit-right-panel">
              <div className="tracking-section">
                <p className="tracking-heading">Tracking Number</p>
                <div className="tracking-box">
                  <div>
                    <p className="courier-label">Courier · BlueDart</p>
                    <p className="tracking-number">BD-9876543210</p>
                  </div>
                  <button className="copy-btn" onClick={handleCopy}>
                    {copied ? (
                      "Copied!"
                    ) : (
                      <>
                        <Copy size={13} style={{ marginRight: 4 }} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="address-section">
                <p className="tracking-heading">Delivery Address</p>
                <p className="address-line">Arjun Mehta</p>
                <p className="address-line">14 Marine Lines,</p>
                <p className="address-line">Flat 4B</p>
                <p className="address-line">Mumbai — 400002</p>
                <p className="address-line">Maharashtra</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {}
      <div className="content-card">
        <div className="card-header list-header">
          <h3>Order History</h3>
          <div className="sort-control">
            Sort <span className="sort-icon">↕</span>
          </div>
        </div>

        <table className="dashboard-table offers-table">
          <thead>
            <tr>
              <th>Product Thumbnail</th>
              <th>Watch</th>
              <th>Reference</th>
              <th>Final Price</th>
              <th>Notified Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr className="compact-row" key={i}>
                <td className="product-cell">
                  <div className="product-thumb"></div>
                </td>
                <td>
                  <p>
                    <strong>Rolex</strong> Skydweller
                  </p>
                  <span>M336934-0002</span>
                </td>
                <td>xxxxxxxxxx</td>
                <td>₹27,00,000</td>
                <td>02-02-2026</td>
                <td>
                  <span className="status-badge status-delivered">
                    <Circle
                      size={10}
                      fill="currentColor"
                      strokeWidth={0}
                      style={{ marginRight: "4px", verticalAlign: "middle" }}
                    />{" "}
                    Delivered
                  </span>
                </td>
                <td>
                  <span className="expand-icon">
                    <ChevronDown size={16} strokeWidth={2} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
