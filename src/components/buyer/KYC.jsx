import React from "react";
import { FileText, UploadCloud } from "lucide-react";
import "./BuyerComponents.css";

const KYC = () => {
  return (
    <div style={{ maxWidth: "800px" }}>
      <div
        className="info-banner"
        style={{ background: "#fff7ed", border: "1px solid #ffedd5" }}
      >
        <div className="banner-content">
          <span
            className="info-icon"
            style={{ color: "#e58d11", marginTop: 0 }}
          >
            <FileText size={20} strokeWidth={1.5} />
          </span>
          <div>
            <strong style={{ color: "#e58d11", fontSize: "12px" }}>
              PENDING REVIEW
            </strong>
            <p
              style={{
                color: "#1a1a1a",
                fontWeight: "600",
                fontSize: "16px",
                marginTop: "4px",
              }}
            >
              Complete your KYC to unlock full features
            </p>
          </div>
        </div>
        <span style={{ color: "#888", fontSize: "13px" }}>
          Estimated review: 24-48 hours
        </span>
      </div>

      <div className="content-card">
        <div className="dashboard-header" style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", margin: 0 }}>Document Verification</h2>
        </div>

        <div className="form-group">
          <label className="form-label">ID PROOF TYPE</label>
          <select className="form-select">
            <option>Aadhaar Card (India)</option>
            <option>PAN Card</option>
            <option>Passport</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">IDENTITY DOCUMENT</label>
          <div className="upload-area">
            <div className="upload-icon">
              <UploadCloud size={24} strokeWidth={1.5} />
            </div>
            <div className="upload-text">Drop file or click to upload</div>
            <div className="upload-subtext">PDF, JPG UP TO 10MB</div>
          </div>
        </div>
      </div>

      <div className="content-card">
        <div className="dashboard-header" style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", margin: 0 }}>Personal Information</h2>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">FULL NAME</label>
            <input
              type="text"
              className="form-input"
              placeholder="As per legal ID"
            />
          </div>
          <div className="form-group">
            <label className="form-label">DATE OF BIRTH</label>
            <input
              type="text"
              className="form-input"
              placeholder="mm/dd/yyyy"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">ADDRESS</label>
          <input
            type="text"
            className="form-input"
            placeholder="House/Flat No, Building, Street Name"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">CITY</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Mumbai"
            />
          </div>
          <div className="form-group">
            <label className="form-label">STATE</label>
            <input type="text" className="form-input" placeholder="MH" />
          </div>
          <div className="form-group">
            <label className="form-label">PINCODE</label>
            <input type="text" className="form-input" placeholder="400001" />
          </div>
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <button className="btn-primary" style={{ padding: "12px 32px" }}>
          Submit KYC
        </button>
      </div>
    </div>
  );
};

export default KYC;
