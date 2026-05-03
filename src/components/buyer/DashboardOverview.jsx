import React from "react";

const DashboardOverview = ({ setActiveTab }) => {
  return (
    <div>
      <div className="dashboard-header">
        <h4>My Account</h4>
        <h1>Good Morning, Arjun</h1>
      </div>

      <div style={{ display: "flex", gap: "24px" }}>
        {}
        <div className="content-card" style={{ flex: 1 }}>
          <div className="card-header">
            <h3>All Offers</h3>
            <button
              className="view-all-btn"
              onClick={() => setActiveTab("My Offers")}
            >
              View All
            </button>
          </div>
          <table className="dashboard-table">
            <tbody>
              <tr>
                <td className="product-cell">
                  <div className="product-thumb"></div>
                  <div className="product-info">
                    <p>Rolex Sky dweller</p>
                    <span>M336934-0002</span>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>₹27,00,000</td>
                <td>
                  <span className="status-badge status-awaiting">
                    Awaiting Action
                  </span>
                </td>
              </tr>
              <tr>
                <td className="product-cell">
                  <div className="product-thumb"></div>
                  <div className="product-info">
                    <p>Rolex Sky dweller</p>
                    <span>M336934-0002</span>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>₹27,00,000</td>
                <td>
                  <span className="status-badge status-review">
                    Under Review
                  </span>
                </td>
              </tr>
              <tr>
                <td className="product-cell">
                  <div className="product-thumb"></div>
                  <div className="product-info">
                    <p>Rolex Sky dweller</p>
                    <span>M336934-0002</span>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>₹27,00,000</td>
                <td>
                  <span className="status-badge status-rejected">Rejected</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {}
        <div className="content-card" style={{ flex: 1 }}>
          <div className="card-header">
            <h3>Order History</h3>
            <button
              className="view-all-btn"
              onClick={() => setActiveTab("Order History")}
            >
              View All
            </button>
          </div>
          <table className="dashboard-table">
            <tbody>
              <tr>
                <td className="product-cell">
                  <div className="product-thumb"></div>
                  <div className="product-info">
                    <p>Rolex Sky dweller</p>
                    <span>M336934-0002</span>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>₹27,00,000</td>
                <td>
                  <span className="status-badge status-transit">
                    In Transit
                  </span>
                </td>
              </tr>
              <tr>
                <td className="product-cell">
                  <div className="product-thumb"></div>
                  <div className="product-info">
                    <p>Rolex Sky dweller</p>
                    <span>M336934-0002</span>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>₹27,00,000</td>
                <td>
                  <span className="status-badge status-delivered">
                    Delivered
                  </span>
                </td>
              </tr>
              <tr>
                <td className="product-cell">
                  <div className="product-thumb"></div>
                  <div className="product-info">
                    <p>Rolex Sky dweller</p>
                    <span>M336934-0002</span>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>₹27,00,000</td>
                <td>
                  <span className="status-badge status-delivered">
                    Delivered
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
