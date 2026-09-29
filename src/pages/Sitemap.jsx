import { Link } from "react-router-dom";
import "./Sitemap.css";

function Sitemap() {
  const sections = [
    {
      title: "Main",
      links: [
        { label: "Home", path: "/" },
        { label: "Search", path: "/search" },
        { label: "Events", path: "/events" },
        { label: "Calendar", path: "/calendar" },
        { label: "Cosplay", path: "/cosplay" },
        { label: "Merchandise", path: "/merchandise" },
      ],
    },
    {
      title: "Categories",
      links: [
        { label: "Anime", path: "/category/anime" },
        { label: "Gaming", path: "/category/gaming" },
        { label: "Movies", path: "/category/movies" },
        { label: "TV Shows", path: "/category/tv-shows" },
        { label: "K-Pop", path: "/category/k-pop" },
        { label: "Comics", path: "/category/comics" },
      ],
    },
    {
      title: "User",
      links: [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Profile", path: "/profile" },
        { label: "Edit Profile", path: "/edit-profile" },
        { label: "Bookmarks", path: "/bookmarks" },
      ],
    },
    {
      title: "Account",
      links: [
        { label: "Login", path: "/login" },
        { label: "Register", path: "/register" },
        { label: "Forgot Password", path: "/forgot-password" },
        { label: "Reset Password", path: "/reset-password" },
        { label: "Email Verification", path: "/verify-email" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Administration",
      links: [
        { label: "Admin Dashboard", path: "/admin" },
      ],
    },
  ];

  return (
    <div className="sitemap-page">
      <div className="container">
        <div className="sitemap-header">
          <p className="sitemap-eyebrow">MAXVIEW</p>
          <h1>Site Map</h1>
          <p>
            Explore the pages and features available across MaxView.
          </p>
        </div>

        <div className="sitemap-grid">
          {sections.map((section) => (
            <section className="sitemap-section" key={section.title}>
              <h2>{section.title}</h2>

              <div className="sitemap-links">
                {section.links.map((link) => (
                  <Link to={link.path} key={link.path}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sitemap;