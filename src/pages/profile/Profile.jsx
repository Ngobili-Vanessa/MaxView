import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">

        <div className="profile-header">
          <div className="profile-avatar">
            <span>WC</span>
          </div>

          <div className="profile-heading">
            <h1>Wisdom Charles</h1>
            <p>wisdom.charles@example.com</p>
          </div>

          <a href="/edit-profile" className="edit-profile-button">
            Edit Profile
          </a>
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
                <span>Email Verification</span>
                <strong className="verified-status">
                  Verified
                </strong>
              </div>

              <div className="preference-item">
                <span>Member Since</span>
                <strong>September 2026</strong>
              </div>

            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

export default Profile;