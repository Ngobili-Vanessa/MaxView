import { useState } from "react";
import cosplay from "../data/cosplay.json";
import "./Cosplay.css";

function Cosplay() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCosplay =
    selectedCategory === "all"
      ? cosplay
      : cosplay.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="cosplay-page">
      <div className="cosplay-header">
        <h1>Cosplay</h1>
        <p>Explore cosplay content from different fandoms.</p>
      </div>

      <div className="cosplay-filters">
        <button
          onClick={() => setSelectedCategory("all")}
          className={selectedCategory === "all" ? "active" : ""}
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("anime")}
          className={selectedCategory === "anime" ? "active" : ""}
        >
          Anime
        </button>

        <button
          onClick={() => setSelectedCategory("gaming")}
          className={selectedCategory === "gaming" ? "active" : ""}
        >
          Gaming
        </button>

        <button
          onClick={() => setSelectedCategory("k-pop")}
          className={selectedCategory === "k-pop" ? "active" : ""}
        >
          K-Pop
        </button>
      </div>

      <div className="cosplay-grid">
        {filteredCosplay.map((item) => (
          <div className="cosplay-card" key={item.id}>
            <div className="cosplay-image">
              {item.image ? (
                <img src={item.image} alt={item.title} />
              ) : (
                <span>No image</span>
              )}
            </div>

            <div className="cosplay-card-content">
              <p className="cosplay-category">{item.category}</p>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <p>
                <strong>Character:</strong> {item.character}
              </p>

              <p>
                <strong>Cosplayer:</strong> {item.cosplayer}
              </p>

              <div className="cosplay-tags">
                {item.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="cosplay-likes">
                ❤️ {item.likes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cosplay;