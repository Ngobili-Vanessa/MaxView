import merchandise from "../data/merchandise.json";
import "./Merchandise.css";

function Merchandise() {
  return (
    <section className="merchandise-page">
      <div className="merchandise-header">
        <h1>Merchandise</h1>
        <p>
          Discover fandom-inspired merchandise, collectibles and
          featured items from different fandoms.
        </p>
      </div>

      <div className="merchandise-grid">
        {merchandise.map((item) => (
          <article className="merchandise-card" key={item.id}>
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="merchandise-image"
              />
            ) : (
              <div className="merchandise-image-placeholder">
                No image available
              </div>
            )}

            <div className="merchandise-body">
              <span className="merchandise-category">
                {item.category}
              </span>

              <h2>{item.name}</h2>

              <p>{item.description}</p>

              <span className="merchandise-price">
                {item.priceRange}
              </span>

              <p className="merchandise-details">
                {item.details}
              </p>

              <span className="merchandise-availability">
                {item.availability}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Merchandise;