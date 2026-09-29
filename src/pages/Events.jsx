import { useState } from "react";
import { MapPin, Ticket } from "lucide-react";
import "./Events.css";

const eventsData = [
  {
    id: 1,
    title: "Lagos Comic Con 2026",
    date: "2026-09-12",
    city: "Lagos",
    location: "Landmark Event Centre, Victoria Island, Lagos",
    category: "Comics",
    desc: "Africa's biggest pop-culture con - comics, anime, games, films, cosplay",
    ticket: "https://lagoscomiccon.com",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800",
  },
  {
    id: 2,
    title: "AniWeCon 2026: Beyond Fury",
    date: "2026-08-15",
    city: "Lagos",
    location: "Paradise Event Arena, Yaba, Lagos",
    category: "Anime",
    desc: "Anime screenings, cosplay, gaming tournaments and creative workshops",
    ticket: "https://aniwe.events",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
  },
  {
    id: 3,
    title: "Lagos Games Week 2026",
    date: "2026-06-18",
    city: "Lagos",
    location: "National Theatre, Lagos",
    category: "Gaming",
    desc: "Gaming trade fair - developers, investors, Game Jam, Next Gen Summit",
    ticket: "https://lagosgamesweek.com",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
  },
  {
    id: 4,
    title: "AnimeCon Africa 2027",
    date: "2027-07-16",
    city: "Lagos",
    location: "Landmark Centre, Lagos",
    category: "Anime",
    desc: "3-day anime con - cosplay, manga swaps, AMV nights, artist alley",
    ticket: "https://animecon.africa",
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b288f498?w=800",
  },
  {
    id: 5,
    title: "Africa Tech Festival 2026",
    date: "2026-11-17",
    city: "South Africa",
    location: "CTICC, Cape Town",
    category: "Technology",
    desc: "Major tech festival covering digital transformation and innovation",
    ticket: "https://africatechfestival.com",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
  },
  {
    id: 6,
    title: "Art of Technology Lagos 8.0",
    date: "2026-12-03",
    city: "Lagos",
    location: "Landmark Event Centre, VI, Lagos",
    category: "Technology",
    desc: "Tech adoption, ethics, governance - Beyond Smart Cities",
    ticket: "https://aotlagos.com",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
  },
  {
    id: 7,
    title: "AfroFutureTech iFest 2026",
    date: "2026-12-03",
    city: "Lagos",
    location: "Elegushi Beach, Lagos",
    category: "Gaming",
    desc: "4-day festival - tech, culture, capital and creativity",
    ticket: "",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
  },
  {
    id: 8,
    title: "NTAI - Night Time Anime Indulgence",
    date: "2026-10-31",
    city: "Lagos",
    location: "POP Landmark, Oniru Estate, VI",
    category: "Anime",
    desc: "Evening anime community event - from ₦7,500",
    ticket: "https://aniwe.events/ntai",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
  },
  {
    id: 9,
    title: "AnimeCon Africa - October Launch Mixer",
    date: "2026-10-31",
    city: "Lagos",
    location: "Lagos, Nigeria",
    category: "Anime",
    desc: "First monthly meetup leading into 2027 convention",
    ticket: "https://animecon.africa",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
  },
  {
    id: 10,
    title: "Africa Technology Expo 2026",
    date: "2026-06-26",
    city: "Lagos",
    location: "Wole Soyinka Centre, Lagos",
    category: "Technology",
    desc: "Tech expo connecting tech companies, investors and business leaders",
    ticket: "https://africatechexpo.com",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
  },
];

function Events() {
  const [filterCity, setFilterCity] = useState("All");

  const filteredEvents =
    filterCity === "All"
      ? eventsData
      : eventsData.filter((event) => event.city === filterCity);

  return (
    <section className="events-page">
      <div className="events-container">
        <div className="events-header">
          <div>
            <p className="events-eyebrow">EVENTS & EXPERIENCES</p>

            <h1>Upcoming Events</h1>

            <p>
              Discover fandom events, conventions, showcases and
              community experiences.
            </p>
          </div>
        </div>

        <div className="events-filters">
          {["All", "Lagos", "South Africa"].map((city) => (
            <button
              type="button"
              key={city}
              className={filterCity === city ? "active" : ""}
              onClick={() => setFilterCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />

                  <span className="event-category">
                    {event.category}
                  </span>
                </div>

                <div className="event-body">
                  <h2>{event.title}</h2>

                  <div className="event-meta">
                    <span>{event.date}</span>

                    <span className="event-location">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>

                  <p>{event.desc}</p>

                  {event.ticket && (
                    <a
                      href={event.ticket}
                      target="_blank"
                      rel="noreferrer"
                      className="event-ticket"
                    >
                      <Ticket size={16} />
                      Get Ticket
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="events-empty">
            <h2>No events found</h2>
            <p>Try selecting another location.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Events;