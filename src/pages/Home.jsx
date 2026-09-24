import "./Home.css";

function Home() {
    return (
        <div className="home">
            <section className="home-hero">
                <div className="container">
                    <span className="home-eyebrow">WELCOME TO MAXVIEW</span>
                    <h1>
                        Your world of <span>fandom.</span>
                    </h1>
                    <p>
                        Discover anime, gaming, movies, TV shows, K-pop, comics and manga - all in one place.
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
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Explore your fandom</h2>
                        <p>
                            Find something you love and dive deeper.
                        </p>
                        </div>
                         <div className="categories-grid">
                </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured on MaxView</h2>
                        <p>
                            Stories, media and moments worth discovering.
                        </p>
                    </div>

                <div className="featured-grid">
                </div>
                </div>
            </section>
        </div>
    );
}
export default Home;