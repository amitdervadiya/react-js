import React from "react";
import { useLocation } from "react-router-dom";


export default function Dashboard() {
  const location = useLocation();
  console.log(location.state.name)
 

  return (
    <div className="dashboard-container">
      <div className="welcome-card">
        <h1>Welcome to the Dashboard!</h1>
        <div className="user-info">
         
          <h2>{location.state.name ? `Hello, ${location.state.name}!` : "Hello, User!"}</h2>
        </div>
      </div>
    </div>
  );
}
