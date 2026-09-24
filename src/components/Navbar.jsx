import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="/" className="navbar-logo">
          MaxView
        </a>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/category/anime" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="/search" onClick={() => setMenuOpen(false)}>Search</a>
          <a href="/bookmarks" onClick={() => setMenuOpen(false)}>Bookmarks</a>
          <a href="/merchandise" onClick={() => setMenuOpen(false)}>Merchandise</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="navbar-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;