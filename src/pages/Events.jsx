import events from "../data/events.json";
import "./Events.css";

function Events() {
  return (
    <section className="events-page">
      <div className="events-header">
        <h1>Events</h1>
        <p>
          Discover fandom events, conventions, showcases and
          community experiences.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <article className="event-card" key={event.id}>
            {event.image ? (
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            ) : (
              <div className="event-image-placeholder">
                No image available
              </div>
            )}

            <div className="event-body">
              <span className="event-category">
                {event.category}
              </span>

              <h2>{event.title}</h2>

              <p>{event.description}</p>

              <div className="event-meta">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Events;