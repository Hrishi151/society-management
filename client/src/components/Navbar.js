import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const buttonStyle = {
    margin: "0 10px",
    padding: "8px 15px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2 style={{ margin: 0 }}>Society Management</h2>
      <div>
        <button style={buttonStyle} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
