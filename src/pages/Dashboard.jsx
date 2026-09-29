import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("access_token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user.");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const userName = user?.name || "User";

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        <section className="dashboard-welcome">
          <div>
            <p className="dashboard-eyebrow">WELCOME BACK</p>
            <h1>Welcome back, {userName}!</h1>
            <p className="dashboard-subtitle">
              Ready to explore your universe?
            </p>
          </div>

          <Link to="/profile" className="dashboard-profile-link">
            View Profile
          </Link>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <h2>Quick Access</h2>
            <p>Jump back into your Max View experience.</p>
          </div>

          <div className="dashboard-cards">
            <Link to="/bookmarks" className="dashboard-card">
              <h3>Bookmarks</h3>
              <p>View the content you saved for later.</p>
            </Link>

            <Link to="/events" className="dashboard-card">
              <h3>Events</h3>
              <p>Discover upcoming fandom events and experiences.</p>
            </Link>

            <Link to="/search" className="dashboard-card">
              <h3>Explore</h3>
              <p>Search through movies, anime, gaming and more.</p>
            </Link>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <h2>Explore Max View</h2>
            <p>Find something new to enjoy.</p>
          </div>

          <div className="dashboard-explore">
            <Link to="/category/anime">Anime</Link>
            <Link to="/category/gaming">Gaming</Link>
            <Link to="/category/movies">Movies</Link>
            <Link to="/category/tv-shows">TV Shows</Link>
            <Link to="/category/k-pop">K-Pop</Link>
            <Link to="/category/comics">Comics</Link>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Dashboard;