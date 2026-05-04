import React, { useState } from "react";
import "./Process.css";

const Process = () => {
  const [role, setRole] = useState("Buyer");

  const buyerSteps = [
    {
      id: "01",
      title: "Browse & discover",
      desc: "Every watch is admin-verified before it goes live. Browse freely, no login needed!",
    },
    {
      id: "02",
      title: "Make an offer",
      desc: "Name your price. Our team negotiates on your behalf, no direct seller contact.",
    },
    {
      id: "03",
      title: "Pay securely",
      desc: "Payment goes to IWC only. Funds are held until delivery is confirmed.",
    },
    {
      id: "04",
      title: "Receive & enjoy",
      desc: "Authenticated, insured, and delivered. Raise a dispute within the window if anything is off.",
    },
  ];

  const sellerSteps = [
    {
      id: "01",
      title: "List your watch",
      desc: "Submit your watch details. Our experts verify and list it on the platform.",
    },
    {
      id: "02",
      title: "Receive offers",
      desc: "Get notified of offers. We negotiate on your behalf to get the best price.",
    },
    {
      id: "03",
      title: "Ship securely",
      desc: "Once an offer is accepted, we guide you on secure shipping to our authentication center.",
    },
    {
      id: "04",
      title: "Get paid",
      desc: "Funds are released to you immediately after the buyer confirms delivery and authentication.",
    },
  ];

  const steps = role === "Buyer" ? buyerSteps : sellerSteps;

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">
            Browse, offer, and own
            <br />
            entirely on your terms.
          </h2>

          <div className="role-toggle">
            <button
              className={`toggle-btn ${role === "Buyer" ? "active" : ""}`}
              onClick={() => setRole("Buyer")}
            >
              Buyer
            </button>
            <button
              className={`toggle-btn ${role === "Seller" ? "active" : ""}`}
              onClick={() => setRole("Seller")}
            >
              Seller
            </button>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-steps">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="step-number">{step.id}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
