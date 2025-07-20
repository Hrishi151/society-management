import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Show Home Page */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member-dashboard"
          element={
            <ProtectedRoute role="member">
              <MemberDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
