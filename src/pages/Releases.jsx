import releases from "../data/releases.json";
import "./Releases.css";

function Releases() {
  return (
    <section className="releases-page">
      <div className="releases-header">
        <h1>Upcoming Releases</h1>
        <p>
          Stay up to date with upcoming anime, games, movies,
          shows, comics and merchandise releases.
        </p>
      </div>

      <div className="releases-grid">
        {releases.map((release) => (
          <article className="release-card" key={release.id}>
            {release.image ? (
              <img
                src={release.image}
                alt={release.title}
                className="release-image"
              />
            ) : (
              <div className="release-image-placeholder">
                No image available
              </div>
            )}

            <div className="release-body">
              <span className="release-category">
                {release.category}
              </span>

              <h2>{release.title}</h2>

              <p>{release.description}</p>

              <div className="release-meta">
                <span>{release.type}</span>
                <span>{release.releaseDate}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Releases;