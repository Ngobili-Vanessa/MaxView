import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleLogout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("reset_token");

    navigate("/login");
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          MaxView
        </Link>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/category/anime" onClick={closeMenu}>
            Categories
          </Link>
          <Link to="/search" onClick={closeMenu}>
            Search
          </Link>
          <Link to="/events" onClick={closeMenu}>
            Events
          </Link>
          <Link to="/calendar" onClick={closeMenu}>
            Calendar
          </Link>
          <Link to="/bookmarks" onClick={closeMenu}>
            Bookmarks
          </Link>
          <Link to="/cosplay" onClick={closeMenu}>
            Cosplay
          </Link>
          <Link to="/merchandise" onClick={closeMenu}>
            Merchandise
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/profile" onClick={closeMenu}>
            Profile
          </Link>
          <button
            type="button"
            className="navbar-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>

        <button
          className="navbar-menu"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
