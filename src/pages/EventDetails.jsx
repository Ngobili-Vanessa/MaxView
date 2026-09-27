import { useParams, Link } from "react-router-dom"
import events from "../data/events.json"

function EventDetails() {
  const { id } = useParams()
  const event = events.find((e) => String(e.id) === id)

  if (!event) {
    return <div>Event not found. <Link to="/events">Go back</Link></div>
  }

  return (
    <div>
      <Link to="/events">Back to events</Link>
      <h1>{event.title}</h1>
      <p>{event.city}</p>
      <p>{event.date}</p>
      <img src={event.image} alt={event.title} width="400" />
      <p>{event.description}</p>
      <p>Location: {event.location}</p>

      {/* simple map */}
      <iframe
        title="map"
        src={`https://maps.google.com/maps?q=${event.location}&z=13&output=embed`}
        width="100%"
        height="250"
      ></iframe>

      <br />
      <a href={event.ticketLink} target="_blank" rel="noreferrer">Buy Ticket</a>
    </div>
  )
}

export default EventDetails;