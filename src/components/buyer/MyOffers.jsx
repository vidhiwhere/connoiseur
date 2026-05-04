import React, { useState } from "react";
import { Info, ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react";
import "./BuyerComponents.css";

const MyOffers = () => {
  const [expandedOffer, setExpandedOffer] = useState(2);

  return (
    <div>
      <div className="dashboard-header">
        <h4>My Offers</h4>
        <h1>Good Morning, Arjun</h1>
      </div>

      <div className="info-banner">
        <div className="banner-content">
          <span className="info-icon" style={{ marginTop: 0 }}>
            <Info size={20} strokeWidth={1.5} color="#e58d11" />
          </span>
          <div>
            <strong>HOW OFFERS WORK</strong>
            <p>
              All offers are reviewed and negotiated by the team on your behalf.
              You will never be in direct contact with the seller. Once both
              sides agree on a price, the seller gets a final confirmation
              window. You will be notified when the seller confirms and checkout
              is ready.
            </p>
          </div>
        </div>
        <button className="btn-secondary">Learn more</button>
      </div>

      <div className="content-card">
        <div className="card-header list-header">
          <h3>Offer History</h3>
          <div className="sort-control">
            Sort{" "}
            <span className="sort-icon">
              <ArrowUpDown size={14} strokeWidth={2} />
            </span>
          </div>
        </div>

        <div className="table-responsive">
          <table className="dashboard-table offers-table">
            <thead>
              <tr>
                <th>Product Thumbnail</th>
                <th>Watch</th>
                <th>Notified Date</th>
                <th>Asking Price</th>
                <th>Offered Price</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* ... rows ... */}
              <tr className="compact-row">
                <td className="product-cell">
                  <div className="product-thumb"></div>
                </td>
                <td>
                  <p>
                    <strong>Rolex</strong> Skydweller
                  </p>
                  <span>M336934-0002</span>
                </td>
                <td>xx-xx-xxxx</td>
                <td>₹27,00,000</td>
                <td>02-02-2026</td>
                <td>
                  <span className="status-badge status-awaiting">New</span>
                </td>
                <td>
                  <span className="expand-icon">
                    <ChevronDown size={16} strokeWidth={2} />
                  </span>
                </td>
              </tr>

              {/* ... */}
              <tr
                className={`expandable-row ${expandedOffer === 2 ? "expanded" : ""}`}
                onClick={() => setExpandedOffer(2)}
              >
                <td colSpan="7">
                  <div className="expanded-content">
                    <div className="expanded-top">
                      <div className="product-thumb large"></div>
                      <div className="expanded-details">
                        <p>
                          <strong>Rolex</strong>
                        </p>
                        <p className="watch-name">
                          Skydweller <span>M336934-0002</span>
                        </p>
                        <p className="asking-price">Asking Price : ₹ 18,50,000</p>
                        <p className="your-offer">
                          Your Offer Price : ₹ 16,00,000
                        </p>
                      </div>
                      <div className="counter-offer-section">
                        <p>COUNTER OFFER PRICE</p>
                        <h2>₹ 17,00,000</h2>
                      </div>
                      <div className="expand-icon-top">
                        <ChevronUp size={20} strokeWidth={2} />
                      </div>
                    </div>
                    <div className="expanded-actions">
                      <button className="btn-outline-danger">Reject</button>
                      <div className="action-right">
                        <button className="btn-secondary">Counter</button>
                        <button className="btn-primary">Accept Offer</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              {/* ... */}
              <tr className="compact-row">
                <td className="product-cell">
                  <div className="product-thumb"></div>
                </td>
                <td>
                  <p>
                    <strong>Rolex</strong> Skydweller
                  </p>
                  <span>M336934-0002</span>
                </td>
                <td>xx-xx-xxxx</td>
                <td>₹27,00,000</td>
                <td>02-02-2026</td>
                <td>
                  <span className="status-badge status-rejected">Rejected</span>
                </td>
                <td>
                  <span className="expand-icon">
                    <ChevronDown size={16} strokeWidth={2} />
                  </span>
                </td>
              </tr>

              {/* ... */}
              <tr className="expandable-row expanded">
                <td colSpan="7">
                  <div className="expanded-content">
                    <div className="expanded-top">
                      <div className="product-thumb large"></div>
                      <div className="expanded-details">
                        <p>
                          <strong>Rolex</strong>
                        </p>
                        <p className="watch-name">
                          Skydweller <span>M336934-0002</span>
                        </p>
                        <p className="asking-price">Asking Price : ₹ 18,50,000</p>
                        <p className="your-offer">
                          Your Offer Price : ₹ 16,00,000
                        </p>
                      </div>
                      <div className="counter-offer-section">
                        <p>FINAL PRICE</p>
                        <h2>₹ 16,00,000</h2>
                      </div>
                      <div className="expand-icon-top">∧</div>
                    </div>
                    <div className="expanded-actions waiting-seller">
                      <div className="warning-banner">
                        The seller is now reviewing the price. Once they confirm,
                        you will be notified and checkout will be unlocked.
                      </div>
                      <div className="action-right">
                        <button className="btn-secondary">View Product</button>
                        <button className="btn-disabled">Under Review</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              {/* ... */}
              <tr className="compact-row">
                <td className="product-cell">
                  <div className="product-thumb"></div>
                </td>
                <td>
                  <p>
                    <strong>Rolex</strong> Skydweller
                  </p>
                  <span>M336934-0002</span>
                </td>
                <td>xx-xx-xxxx</td>
                <td>₹27,00,000</td>
                <td>02-02-2026</td>
                <td>
                  <span className="status-badge status-accepted">Accepted</span>
                </td>
                <td>
                  <span className="expand-icon">∨</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOffers;
