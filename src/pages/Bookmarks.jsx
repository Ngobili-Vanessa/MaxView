import "./Bookmarks.css";

function Bookmarks() {
  const bookmarks = [];

  return (
    <section className="bookmarks-page">
      <div className="bookmarks-header">
        <h1>My Bookmarks</h1>
        <p>
          Save articles, characters, media and merchandise you want
          to come back to.
        </p>
      </div>

      {bookmarks.length > 0 ? (
        <div className="bookmarks-grid">
          {bookmarks.map((item) => (
            <article className="bookmark-card" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.type}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="bookmarks-empty">
          <h2>No bookmarks yet</h2>
          <p>
            When you bookmark something, it will appear here.
          </p>
        </div>
      )}
    </section>
  );
}

export default Bookmarks;