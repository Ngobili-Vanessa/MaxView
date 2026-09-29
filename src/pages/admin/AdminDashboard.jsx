import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const savedUser = localStorage.getItem("user");

    if (!token || !savedUser) {
      navigate("/login");
      return;
    }

    try {
      const user = JSON.parse(savedUser);

      if (user.role !== "admin") {
        navigate("/dashboard");
        return;
      }

      setChecking(false);
    } catch {
      navigate("/login");
    }
  }, [navigate]);

  if (checking) {
    return (
      <div className="admin-dashboard">
        <div className="admin-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <p className="admin-eyebrow">MAX VIEW ADMIN</p>
            <h1>Admin Dashboard</h1>
            <p>Manage your Max View platform from one place.</p>
          </div>
        </div>

        <div className="admin-cards">
          <div className="admin-card">
            <h2>Users</h2>
            <p>Manage registered users and account access.</p>
          </div>

          <div className="admin-card">
            <h2>Content</h2>
            <p>Manage articles, characters and media.</p>
          </div>

          <div className="admin-card">
            <h2>Events</h2>
            <p>Manage fandom events and schedules.</p>
          </div>

          <div className="admin-card">
            <h2>Merchandise</h2>
            <p>Manage merchandise and resource listings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;