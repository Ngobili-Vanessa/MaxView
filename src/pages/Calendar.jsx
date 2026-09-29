import { useState } from "react";
import { CalendarDays, MapPin, Plus } from "lucide-react";
import "./Calendar.css";

const eventsData = [
  {
    id: 1,
    title: "Lagos Comic Con 2026",
    date: "2026-09-12",
    location: "Landmark, VI, Lagos",
    color: "#6c5ce7",
  },
  {
    id: 2,
    title: "AniWeCon: Beyond Fury",
    date: "2026-08-15",
    location: "Paradise Arena, Yaba",
    color: "#e84393",
  },
  {
    id: 3,
    title: "Lagos Games Week",
    date: "2026-06-18",
    location: "National Theatre, Lagos",
    color: "#00b894",
  },
  {
    id: 4,
    title: "AnimeCon Africa 2027",
    date: "2027-07-16",
    location: "Landmark Centre, Lagos",
    color: "#fdcb6e",
  },
  {
    id: 5,
    title: "Africa Tech Festival",
    date: "2026-11-17",
    location: "CTICC, Cape Town",
    color: "#0984e3",
  },
  {
    id: 6,
    title: "AOT Lagos 8.0",
    date: "2026-12-03",
    location: "Landmark, VI",
    color: "#6c5ce7",
  },
  {
    id: 7,
    title: "AfroFutureTech iFest",
    date: "2026-12-03",
    location: "Elegushi Beach, Lagos",
    color: "#e17055",
  },
  {
    id: 8,
    title: "NTAI Night Anime",
    date: "2026-10-31",
    location: "POP Landmark, Oniru",
    color: "#e84393",
  },
  {
    id: 9,
    title: "AnimeCon Launch Mixer",
    date: "2026-10-31",
    location: "Lagos",
    color: "#fdcb6e",
  },
  {
    id: 10,
    title: "Africa Tech Expo",
    date: "2026-06-26",
    location: "Wole Soyinka Centre",
    color: "#0984e3",
  },
];

function Calendar() {
  const [selectedDate, setSelectedDate] = useState("2026-09-12");

  const eventsOnSelected = eventsData.filter(
    (event) => event.date === selectedDate
  );

  const daysInMonth = 30;

  return (
    <section className="calendar-page">
      <div className="calendar-container">
        <div className="calendar-header">
          <div>
            <p className="calendar-eyebrow">EVENTS & EXPERIENCES</p>
            <h1>Event Calendar</h1>
            <p>
              Keep track of upcoming fandom events and discover
              something worth attending.
            </p>
          </div>
        </div>

        <div className="calendar-layout">
          <div className="calendar-main">
            <div className="calendar-card">
              <div className="calendar-title">
                <div className="calendar-title-icon">
                  <CalendarDays size={20} />
                </div>

                <div>
                  <h2>September 2026</h2>
                  <p>Click a date to view events.</p>
                </div>
              </div>

              <div className="calendar-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div className="calendar-weekday" key={day}>
                      {day}
                    </div>
                  )
                )}

                <div />
                <div />

                {Array.from({ length: daysInMonth }, (_, index) => {
                  const day = index + 1;
                  const dateStr = `2026-09-${String(day).padStart(
                    2,
                    "0"
                  )}`;

                  const hasEvent = eventsData.some(
                    (event) => event.date === dateStr
                  );

                  const isSelected = selectedDate === dateStr;

                  return (
                    <button
                      type="button"
                      key={day}
                      className={`calendar-day ${
                        isSelected ? "selected" : ""
                      } ${hasEvent ? "has-event" : ""}`}
                      onClick={() => setSelectedDate(dateStr)}
                    >
                      <span>{day}</span>

                      {hasEvent && (
                        <span className="event-dot" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="calendar-card event-list-card">
              <div className="section-heading">
                <div>
                  <h2>All Events</h2>
                  <p>Select an event to view its date.</p>
                </div>
              </div>

              <div className="event-list">
                {eventsData.slice(0, 6).map((event) => (
                  <button
                    type="button"
                    className="event-list-item"
                    key={event.id}
                    onClick={() => setSelectedDate(event.date)}
                    style={{
                      "--event-color": event.color,
                    }}
                  >
                    <div>
                      <strong>{event.title}</strong>
                      <span>{event.location}</span>
                    </div>

                    <span className="event-date">
                      {event.date}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="calendar-details">
            <div className="calendar-card details-card">
              <div className="section-heading">
                <div>
                  <p className="details-label">SELECTED DATE</p>
                  <h2>{selectedDate}</h2>
                </div>
              </div>

              {eventsOnSelected.length > 0 ? (
                <div className="selected-events">
                  {eventsOnSelected.map((event) => (
                    <div
                      className="selected-event"
                      key={event.id}
                      style={{
                        "--event-color": event.color,
                      }}
                    >
                      <div className="selected-event-accent" />

                      <div className="selected-event-content">
                        <h3>{event.title}</h3>

                        <p className="event-location">
                          <MapPin size={15} />
                          {event.location}
                        </p>

                        <p className="event-description">
                          This is a fandom event listed on Max View.
                          Check the event details for more information.
                        </p>

                        <button
                          type="button"
                          className="add-event-button"
                        >
                          <Plus size={16} />
                          Add to My List
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-event">
                  <p>No event on this date.</p>
                  <span>
                    Select a date marked with an event dot.
                  </span>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Calendar;