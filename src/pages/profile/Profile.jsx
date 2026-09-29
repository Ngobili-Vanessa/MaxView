import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
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
          throw new Error("Failed to fetch profile.");
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
      <div className="profile-page">
        <div className="profile-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const name = user?.name || "User";
  const email = user?.email || "No email available";

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="profile-page">
      <div className="profile-container">

        <div className="profile-header">
          <div className="profile-avatar">
            {user?.avatar ? (
              <img src={user.avatar} alt={name} />
            ) : (
              <span>{initials}</span>
            )}
          </div>

          <div className="profile-heading">
            <h1>{name}</h1>
            <p>{email}</p>
          </div>

          <Link to="/edit-profile" className="edit-profile-button">
            Edit Profile
          </Link>
        </div>

        <div className="profile-sections">

          <section className="profile-card">
            <div className="profile-card-header">
              <h2>Favorite Fandoms</h2>
            </div>

            <div className="fandom-tags">
              <span>Marvel</span>
              <span>DC</span>
              <span>Anime</span>
              <span>Star Wars</span>
            </div>
          </section>

          <section className="profile-card">
            <div className="profile-card-header">
              <h2>Display Preferences</h2>
            </div>

            <div className="preference-list">
              <div className="preference-item">
                <span>Theme</span>
                <strong>Dark</strong>
              </div>

              <div className="preference-item">
                <span>Content Language</span>
                <strong>English</strong>
              </div>
            </div>
          </section>

          <section className="profile-card">
            <div className="profile-card-header">
              <h2>Account Information</h2>
            </div>

            <div className="preference-list">
              <div className="preference-item">
                <span>Email</span>
                <strong>{email}</strong>
              </div>

              <div className="preference-item">
                <span>Account Type</span>
                <strong>
                  {user?.role === "admin" ? "Admin" : "User"}
                </strong>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Profile;