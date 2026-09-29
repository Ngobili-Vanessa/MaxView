import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarEditor from "../../components/profile/AvatarEditor";
import "./EditProfile.css";

function EditProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);

  const [showAvatarEditor, setShowAvatarEditor] = useState(false);

  const [avatarSettings, setAvatarSettings] = useState({
    zoom: 1,
    positionX: 50,
    positionY: 50,
  });

  const [favoriteFandoms, setFavoriteFandoms] = useState([
    "Marvel",
    "DC",
    "Anime",
    "Star Wars",
  ]);

  const [saving, setSaving] = useState(false);

  const fandoms = [
    "Marvel",
    "DC",
    "Anime",
    "Star Wars",
    "Harry Potter",
    "Gaming",
    "Comics",
    "Movies",
  ];

  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem("access_token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load profile.");
        }

        const data = await response.json();

        setUser(data);
        setName(data.name || "");
        setAvatar(data.avatar || null);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    }

    fetchProfile();
  }, [navigate]);

  const handleFandomChange = (fandom) => {
    setFavoriteFandoms((currentFandoms) =>
      currentFandoms.includes(fandom)
        ? currentFandoms.filter((item) => item !== fandom)
        : [...currentFandoms, fandom]
    );
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Avatar must be smaller than 5MB.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setAvatar(imageUrl);

    setAvatarSettings({
      zoom: 1,
      positionX: 50,
      positionY: 50,
    });

    setShowAvatarEditor(true);
  };

  const handleAvatarApply = (settings) => {
    setAvatarSettings({
      zoom: settings.zoom,
      positionX: settings.positionX,
      positionY: settings.positionY,
    });

    setShowAvatarEditor(false);
  };

  const handleAvatarRemove = () => {
    setAvatar(null);

    setAvatarSettings({
      zoom: 1,
      positionX: 50,
      positionY: 50,
    });

    setShowAvatarEditor(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("access_token");

    if (!token) {
      navigate("/login");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          avatar: avatar,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to update profile.");
      }

      setUser(data);

      localStorage.setItem("user", JSON.stringify(data));

      alert("Profile updated successfully.");

      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="edit-profile-page">
        <div className="edit-profile-container">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <div>
            <h1>Edit Profile</h1>
            <p>Update your personal information and preferences.</p>
          </div>

          <Link to="/profile" className="cancel-button">
            Cancel
          </Link>
        </div>

        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <section className="edit-profile-card">
            <div className="edit-card-header">
              <h2>Profile Information</h2>
              <p>
                Update the information displayed on your profile.
              </p>
            </div>

            <div className="avatar-section">
              <label
                htmlFor="avatar-upload"
                className="edit-avatar clickable-avatar"
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="Profile preview"
                    style={{
                      transform: `scale(${avatarSettings.zoom})`,
                      objectPosition: `${avatarSettings.positionX}% ${avatarSettings.positionY}%`,
                    }}
                  />
                ) : (
                  user.name?.charAt(0)?.toUpperCase() || "U"
                )}
              </label>

              <div className="avatar-actions">
                <label
                  htmlFor="avatar-upload"
                  className="secondary-button"
                >
                  Change Avatar
                </label>

                <input
                  type="file"
                  id="avatar-upload"
                  accept="image/png, image/jpeg, image/gif"
                  onChange={handleAvatarChange}
                  hidden
                />

                <span>JPG, PNG or GIF. Maximum size 5MB.</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="displayName">Display Name</label>

              <input
                type="text"
                id="displayName"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                value={user.email}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>

              <textarea
                id="bio"
                rows="4"
                placeholder="Tell the fandom community a little about yourself..."
              />
            </div>
          </section>

          <section className="edit-profile-card">
            <div className="edit-card-header">
              <h2>Favorite Fandoms</h2>

              <p>Select the fandoms you love most.</p>
            </div>

            <div className="fandom-options">
              {fandoms.map((fandom) => (
                <label key={fandom} className="fandom-option">
                  <input
                    type="checkbox"
                    checked={favoriteFandoms.includes(fandom)}
                    onChange={() => handleFandomChange(fandom)}
                  />

                  <span>{fandom}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="edit-profile-card">
            <div className="edit-card-header">
              <h2>Display Preferences</h2>

              <p>Customize how Max View looks for you.</p>
            </div>

            <div className="preference-control">
              <div>
                <strong>Theme</strong>

                <p>Choose your preferred appearance.</p>
              </div>

              <select defaultValue="dark">
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">
                  System Default
                </option>
              </select>
            </div>

            <div className="preference-control">
              <div>
                <strong>Content Language</strong>

                <p>
                  Select the language used across the platform.
                </p>
              </div>

              <select defaultValue="english">
                <option value="english">English</option>
              </select>
            </div>
          </section>

          <div className="form-actions">
            <Link to="/profile" className="cancel-button">
              Cancel
            </Link>

            <button
              type="submit"
              className="save-button"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

      {showAvatarEditor && (
        <AvatarEditor
          image={avatar}
          onApply={handleAvatarApply}
          onRemove={handleAvatarRemove}
          onClose={() => setShowAvatarEditor(false)}
        />
      )}
    </div>
  );
}

export default EditProfile;