import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BuyerDashboard.css";
import Footer from "../components/Footer";

import DashboardOverview from "../components/buyer/DashboardOverview";
import MyOffers from "../components/buyer/MyOffers";
import OrderHistory from "../components/buyer/OrderHistory";
import {
  LayoutDashboard,
  Handshake,
  Package,
  Heart,
  ShieldCheck,
  ShoppingCart,
  AlertCircle,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  ChevronLeft,
} from "lucide-react";
import Wishlist from "../components/buyer/Wishlist";
import KYC from "../components/buyer/KYC";
import Cart from "../components/buyer/Cart";
import Checkout from "../components/buyer/Checkout";
import OrderConfirmed from "../components/buyer/OrderConfirmed";

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardOverview setActiveTab={setActiveTab} />;
      case "My Offers":
        return <MyOffers />;
      case "Order History":
        return <OrderHistory />;
      case "Wishlist":
        return <Wishlist />;
      case "KYC":
        return <KYC />;
      case "Cart":
        return <Cart setCheckoutStep={setActiveTab} />;
      case "Checkout":
        return <Checkout setCheckoutStep={setActiveTab} />;
      case "OrderConfirmed":
        return <OrderConfirmed />;
      default:
        return <DashboardOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      <div className="buyer-dashboard">
        {}
        <aside className="buyer-sidebar">
          <div className="sidebar-logo">
            <Link to="/">
              <img
                src="/images/navbar-logo.png"
                alt="IWC"
                style={{ width: "24px", marginRight: "8px" }}
              />
              <span className="logo-text">IndianWatchconnoisseur</span>
            </Link>
          </div>

          <button className="back-shopping-btn" onClick={() => navigate("/")}>
            <span className="back-arrow">
              <ChevronLeft size={16} strokeWidth={3} />
            </span>
            Go back to shopping
          </button>

          <nav className="sidebar-nav">
            <div
              className={`nav-item ${activeTab === "Dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("Dashboard")}
            >
              <span className="nav-icon">
                <LayoutDashboard size={20} strokeWidth={1.5} />
              </span>
              Dashboard
            </div>
            <div
              className={`nav-item ${activeTab === "My Offers" ? "active" : ""}`}
              onClick={() => setActiveTab("My Offers")}
            >
              <span className="nav-icon">
                <Handshake size={20} strokeWidth={1.5} />
              </span>
              My Offers
            </div>
            <div
              className={`nav-item ${activeTab === "Order History" ? "active" : ""}`}
              onClick={() => setActiveTab("Order History")}
            >
              <span className="nav-icon">
                <Package size={20} strokeWidth={1.5} />
              </span>
              Order History
            </div>
            <div
              className={`nav-item ${activeTab === "Wishlist" ? "active" : ""}`}
              onClick={() => setActiveTab("Wishlist")}
            >
              <span className="nav-icon">
                <Heart size={20} strokeWidth={1.5} />
              </span>
              Wishlist
            </div>
            <div
              className={`nav-item ${activeTab === "KYC" ? "active" : ""}`}
              onClick={() => setActiveTab("KYC")}
            >
              <span className="nav-icon">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </span>
              KYC
            </div>
            <div
              className={`nav-item ${activeTab === "Cart" ? "active" : ""}`}
              onClick={() => setActiveTab("Cart")}
            >
              <span className="nav-icon">
                <ShoppingCart size={20} strokeWidth={1.5} />
              </span>
              Cart
            </div>

            <div className="nav-divider">Other</div>

            <div className="nav-item">
              <span className="nav-icon">
                <AlertCircle size={20} strokeWidth={1.5} />
              </span>
              Report a Dispute
            </div>
            <div className="nav-item">
              <span className="nav-icon">
                <HelpCircle size={20} strokeWidth={1.5} />
              </span>
              Help Centre
            </div>
            <div className="nav-item">
              <span className="nav-icon">
                <LogOut size={20} strokeWidth={1.5} />
              </span>
              Logout
            </div>
          </nav>
        </aside>

        {}
        <main className="buyer-main">
          {}
          <header className="buyer-topbar">
            <div className="topbar-search">
              <span className="search-icon">
                <Search size={16} strokeWidth={2} />
              </span>
              <input type="text" placeholder="" />
            </div>
            <div className="topbar-actions">
              <button className="icon-btn notification-btn">
                <Bell size={18} strokeWidth={2} />
              </button>
              <button
                className="icon-btn wishlist-btn"
                onClick={() => setActiveTab("Wishlist")}
              >
                <Heart size={18} strokeWidth={2} />
              </button>
              <button className="switch-seller-btn">Become a Seller</button>
              <div className="user-avatar">
                <img
                  src="https://ui-avatars.com/api/?name=Arjun&background=random"
                  alt="Avatar"
                />
              </div>
            </div>
          </header>

          <div className="buyer-content">{renderContent()}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BuyerDashboard;
