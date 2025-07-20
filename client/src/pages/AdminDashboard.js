import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css"; 

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/add-member",
        { name, email, password, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(res.data.message);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error adding user");
    }
  };

  return (
    <div className="admin-dashboard">
      <header>
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="form-container">
        <h3>Add Member</h3>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleAddMember}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="add-btn">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
