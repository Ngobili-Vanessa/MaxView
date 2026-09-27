import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-eyebrow">CONTACT MAXVIEW</span>
          <h1>We'd love to hear from you.</h1>
          <p>
            Have a question, suggestion or something you'd like to report?
            Send us a message and let us know.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h2>Get in touch</h2>
              <p>
                Whether you have feedback about MaxView or simply want to
                share an idea, your feedback helps us improve the platform.
              </p>
            </div>

            <div className="contact-card">
              <h2>Feedback</h2>
              <p>
                Found something that needs fixing or have an idea for a new
                feature? Let us know.
              </p>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="suggestion">Suggestion</option>
                <option value="bug">Bug Report</option>
                <option value="query">General Query</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;