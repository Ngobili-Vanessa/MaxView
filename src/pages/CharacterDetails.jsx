import { useParams } from "react-router-dom";
import characters from "../data/characters.json";

function CharacterDetails() {
  const { id } = useParams();

  const character = characters.find((item) => item.id === id);

  if (!character) {
    return (
      <div className="character-details">
        <h1>Character not found</h1>
        <p>The character you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className="character-details">
      <div className="character-header">
        {character.image ? (
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
          />
        ) : (
          <div className="character-image-placeholder">
            No image available
          </div>
        )}

        <div className="character-info">
          <span className="character-category">
            {character.category}
          </span>

          <h1>{character.name}</h1>

          <h3>{character.series}</h3>

          <p>{character.biography}</p>

          <div className="character-traits">
            {character.traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetails;