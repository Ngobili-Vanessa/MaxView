import { useState, useEffect } from "react";
import { Share2, Trash2, FileText } from "lucide-react";
import "./Bookmarks.css";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    async function fetchBookmarks() {
      try {
        const response = await fetch("http://127.0.0.1:8000/bookmarks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load bookmarks.");
        }

        const data = await response.json();
        setBookmarks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (token) {
      fetchBookmarks();
    } else {
      setLoading(false);
    }
  }, [token]);

  async function remove(id) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/bookmarks/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove bookmark.");
      }

      setBookmarks((current) =>
        current.filter((bookmark) => bookmark.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function saveNote(id, note) {
    try {
      const bookmark = bookmarks.find((item) => item.id === id);

      if (!bookmark) return;

      const response = await fetch(
        `http://127.0.0.1:8000/bookmarks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            content_id: bookmark.content_id,
            content_type: bookmark.content_type,
            note: note,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save note.");
      }

      const updatedBookmark = await response.json();

      setBookmarks((current) =>
        current.map((item) =>
          item.id === id ? updatedBookmark : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function share(bookmark) {
    try {
      await navigator.clipboard.writeText(
        `${bookmark.content_type} #${bookmark.content_id} - ${window.location.href}`
      );

      alert("Link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  }

  if (loading) {
    return (
      <section className="bookmarks-page">
        <div className="bookmarks-empty">
          <p>Loading bookmarks...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bookmarks-page">
      <div className="bookmarks-header">
        <div>
          <p className="bookmarks-eyebrow">YOUR SAVED CONTENT</p>

          <h1>My Bookmarks</h1>

          <p>
            Keep track of articles, characters, media, events and
            merchandise you want to revisit.
          </p>
        </div>
      </div>

      {bookmarks.length === 0 ? (
        <div className="bookmarks-empty">
          <div className="empty-icon">
            <FileText size={28} />
          </div>

          <h2>No bookmarks yet</h2>

          <p>
            Start exploring Max View and save something you want to
            come back to.
          </p>
        </div>
      ) : (
        <div className="bookmarks-grid">
          {bookmarks.map((bookmark) => (
            <article className="bookmark-card" key={bookmark.id}>
              <div className="bookmark-card-top">
                <span className="bookmark-type">
                  {bookmark.content_type}
                </span>
              </div>

              <h2>Content #{bookmark.content_id}</h2>

              <div className="bookmark-note">
                <label htmlFor={`note-${bookmark.id}`}>
                  Note
                </label>

                <input
                  id={`note-${bookmark.id}`}
                  type="text"
                  placeholder="Add a note..."
                  defaultValue={bookmark.note || ""}
                  onBlur={(event) =>
                    saveNote(bookmark.id, event.target.value)
                  }
                />
              </div>

              <div className="bookmark-actions">
                <button
                  type="button"
                  onClick={() => share(bookmark)}
                >
                  <Share2 size={16} />
                  Share
                </button>

                <button
                  type="button"
                  className="remove-bookmark"
                  onClick={() => remove(bookmark.id)}
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="bookmark-stats">
        <div>
          <strong>
            {
              bookmarks.filter(
                (b) => b.content_type === "article"
              ).length
            }
          </strong>
          <span>Articles</span>
        </div>

        <div>
          <strong>
            {
              bookmarks.filter(
                (b) => b.content_type === "character"
              ).length
            }
          </strong>
          <span>Characters</span>
        </div>

        <div>
          <strong>
            {
              bookmarks.filter(
                (b) => b.content_type === "media"
              ).length
            }
          </strong>
          <span>Media</span>
        </div>

        <div>
          <strong>
            {
              bookmarks.filter(
                (b) => b.content_type === "merchandise"
              ).length
            }
          </strong>
          <span>Merchandise</span>
        </div>

        <div>
          <strong>
            {
              bookmarks.filter(
                (b) => b.content_type === "event"
              ).length
            }
          </strong>
          <span>Events</span>
        </div>
      </div>
    </section>
  );
}

export default Bookmarks;