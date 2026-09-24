import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <a href="/" className="footer-logo">
            MaxView
          </a>

          <p>
            Your space to discover, explore and connect with the
            fandoms you love.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="/">Home</a>
            <a href="/search">Search</a>
            <a href="/bookmarks">Bookmarks</a>
            <a href="/trailers">Trailers</a>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <a href="/category/anime">Anime</a>
            <a href="/category/gaming">Gaming</a>
            <a href="/category/movies">Movies</a>
            <a href="/category/tv-shows">TV Shows</a>
          </div>

          <div className="footer-column">
            <h3>More</h3>
            <a href="/category/k-pop">K-Pop</a>
            <a href="/category/comics">Comics</a>
            <a href="/category/manga">Manga</a>
            <a href="/about">About Us</a>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <a href="/contact">Contact Us</a>
            <a href="/merchandise">Merchandise</a>
          </div>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>© 2026 MaxView. All rights reserved.</p>
        <p>Built for the MaxView Community.</p>
      </div>
    </footer>
  );
}

export default Footer;