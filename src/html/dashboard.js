import React, { useState } from "react";
import Overview from "./overview";
import Chat from "./chat";
import VillageManagement from "./village-management";
import Gallery from "./gallery";

const Dashboard = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("overview");

  // Function to handle sidebar button clicks
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="hamburger-btn" id="hamburger-btn">
        ☰
      </div>
      {/* Sidebar */}
      <nav className="sidebar" id="sidebar">
        <h1>Dashboard</h1>
        <ul>
          <li>
            <button
              className="sidebar-btn"
              onClick={() => handleSectionChange("overview")}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              className="sidebar-btn"
              onClick={() => handleSectionChange("village-management")}
            >
              Village Management
            </button>
          </li>
          <li>
            <button
              className="sidebar-btn"
              onClick={() => handleSectionChange("chat")}
            >
              Chat
            </button>
          </li>
          <li>
            <button
              className="sidebar-btn"
              onClick={() => handleSectionChange("gallery")}
            >
              Gallery
            </button>
          </li>
        </ul>
        <div className="user-info">
          <img
            src="../assets/images/admin-avatar.png"
            alt="User Avatar"
            id="user-avatar"
            className="user-avatar"
          />
          <div className="user-details">
            <span id="user-name">User Name</span>
            <a href="../index.html">Logout</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content" id="main-content" >
        {activeSection === "overview" && <Overview />}
        {activeSection === "village-management" && <VillageManagement/>}
        {activeSection === "chat" && <Chat/>}
        {activeSection === "gallery" && <Gallery/>}
      </div>
    </>
  );
};

export default Dashboard;
