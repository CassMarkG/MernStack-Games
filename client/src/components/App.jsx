import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Login from "../pages/Login.jsx";
import AdminL from "../pages/AdminL.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";
import AdminSettings from "../pages/AdminSettings.jsx";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminlogin" element={<AdminL />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminsettings" element={<AdminSettings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
