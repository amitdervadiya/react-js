import React from "react";
import { useLocation } from "react-router-dom";


export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <div className="welcome-card">
        <h1 className="dashboard-title">Welcome to the Dashboard!</h1>
        <div className="user-info">
        <img src={location.state.photo} alt="" />
          <h2 className="user-greeting">
            {location.state?.name ? `Hello, ${location.state.name}!` : "Hello, User!"}
          </h2>
        </div>
      </div>
    </div>
  );
}