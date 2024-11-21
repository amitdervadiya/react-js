import React from "react";
import { useLocation } from "react-router-dom";


export default function Dashboard() {
  const location = useLocation();
  const { name, photo } = location.state || {}; // Get name and photo from state

  return (
    <div className="dashboard-container">
      <div className="welcome-card">
        <h1>Welcome to the Dashboard!</h1>
        <div className="user-info">
          <img
            src={photo} // Display user photo
            alt="User"
            className="user-photo"
          />
          <h2>{name ? `Hello, ${name}!` : "Hello, User!"}</h2>
        </div>
      </div>
    </div>
  );
}
