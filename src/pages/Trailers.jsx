import media from "../data/media.json";
import "./Trailers.css";

function Trailers() {
  const trailers = media.filter((item) => item.mediaType === "trailer");

  return (
    <section className="trailers-page">
      <div className="trailers-header">
        <h1>Trailers</h1>
        <p>Watch the latest trailers, previews and upcoming releases.</p>
      </div>

      <div className="trailers-grid">
        {trailers.map((trailer) => (
          <article className="trailer-card" key={trailer.id}>
            {trailer.thumbnail ? (
              <img
                src={trailer.thumbnail}
                alt={trailer.title}
                className="trailer-thumbnail"
              />
            ) : (
              <div className="trailer-thumbnail-placeholder">
                No thumbnail available
              </div>
            )}

            <div className="trailer-body">
              <span className="trailer-category">{trailer.category}</span>

              <h2>{trailer.title}</h2>

              <p>{trailer.description}</p>

              <div className="trailer-meta">
                <span>{trailer.date}</span>
                <span>{trailer.releaseStatus}</span>
              </div>

              {trailer.url && (
                <a
                  href={trailer.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Watch Trailer
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Trailers;
