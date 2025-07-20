import React from "react";
import { useNavigate } from "react-router-dom";

const MemberDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, Member</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MemberDashboard;
