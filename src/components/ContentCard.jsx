function ContentCard({ item }) {
  return (
    <div className="content-card">

      {item.image || item.thumbnail ? (
        <img
          src={item.image || item.thumbnail}
          alt={item.title}
          className="content-card-image"
        />
      ) : (
        <div className="content-card-placeholder">
          No image
        </div>
      )}

      <div className="content-card-body">

        <span className="content-card-category">
          {item.category}
        </span>

        <h3>{item.title}</h3>

        {item.description && (
          <p>{item.description}</p>
        )}

        <div className="content-card-meta">

          {item.date && (
            <span>{item.date}</span>
          )}

          {item.author && (
            <span>By {item.author}</span>
          )}

        </div>

        {item.mediaType && (
          <span className="content-card-type">
            {item.mediaType}
          </span>
        )}

        {item.location && (
          <span className="content-card-location">
            📍 {item.location}
          </span>
        )}

      </div>

    </div>
  );
}

export default ContentCard;