import { Routes, Route } from "react-router-dom";
import IWCHome from "./pages/IWCHome";
import IWCAdmin from "./pages/IWCAdmin";
import BuyerDashboard from "./pages/BuyerDashboard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<IWCHome />} />
        <Route path="/admin" element={<IWCAdmin />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
