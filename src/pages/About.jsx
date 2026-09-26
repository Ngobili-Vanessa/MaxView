import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-header">
          <span className="about-eyebrow">ABOUT MAXVIEW</span>
          <h1>One place for every fandom.</h1>
          <p>
            MaxView is an interactive fandom platform designed to bring
            entertainment communities, stories and discoveries together in one
            place.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h2>What is MaxView?</h2>
            <p>
              MaxView brings together content from anime, gaming, movies,
              TV shows, K-pop, comics, manga and cosplay. Explore articles,
              characters, media, events, releases and more.
            </p>
          </div>

          <div className="about-card">
            <h2>Our goal</h2>
            <p>
              We want to make it easier for fans to discover content, keep up
              with their interests and explore different fandom communities
              from one platform.
            </p>
          </div>

          <div className="about-card">
            <h2>Built for fans</h2>
            <p>
              MaxView is designed to be accessible, responsive and easy to
              explore across desktop, tablet and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;