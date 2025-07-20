import React from "react";
import Navbar from "../components/Navbar"; // ✅ Import Navbar
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar /> {/* ✅ Add Navbar at the top */}
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to Society Management</h1>
          <p>Manage your society members, track maintenance, and more!</p>
        </header>

        <section className="features">
          <div className="feature-card">
            <h3>🏠 Manage Members</h3>
            <p>Add, update, and view member details easily.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Track Payments</h3>
            <p>Keep an eye on maintenance and other dues.</p>
          </div>
          <div className="feature-card">
            <h3>📢 Announcements</h3>
            <p>Stay updated with the latest society news.</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
