import "./Home.css";
import categories from "../data/categories.json";
import articles from "../data/articles.json";
import media from "../data/media.json";
import events from "../data/events.json";
import ContentCard from "../components/ContentCard";

function Home() {
  const featuredArticles = articles.filter((item) => item.featured);

  const featuredContent = [
    ...featuredArticles,
    ...media.filter((item) => item.featured),
    ...events.filter((item) => item.featured),
  ].slice(0, 6);

  return (
    <div className="home">
      <section className="home-hero">
        <div className="container home-hero-container">
          <div className="home-hero-content">
            <span className="home-eyebrow">WELCOME TO MAXVIEW</span>

            <h1>
              Your world of <span>fandom.</span>
            </h1>

            <p>
              Discover anime, gaming, movies, TV shows, K-pop,
              comics and manga - all in one place.
            </p>

            <div className="home-hero-actions">
              <a href="/category/anime" className="btn btn-primary">
                Explore Categories
              </a>

              <a href="/search" className="btn btn-secondary">
                Search MaxView
              </a>
            </div>
          </div>

          <div className="home-hero-visual">
            <img
              src="/images/maxview-hero.png"
              alt="MaxView entertainment and fandom experience"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Explore your fandom</h2>
            <p>Find something you love and dive deeper.</p>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/category/${category.id}`}
                className="card category-card"
              >
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                  />
                ) : (
                  <div className="content-card-placeholder">
                    {category.name}
                  </div>
                )}

                <div className="category-card-body">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured on MaxView</h2>
            <p>Stories, media and moments worth discovering.</p>
          </div>

          <div className="featured-grid">
            {featuredContent.length > 0 ? (
              featuredContent.map((item) => (
                <ContentCard
                  key={item.id}
                  item={item}
                />
              ))
            ) : (
              <p>No featured content available yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;