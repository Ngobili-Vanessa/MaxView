import { useState } from "react";
import "./AvatarEditor.css";

function AvatarEditor({ image, onApply, onRemove, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);

  const handleApply = () => {
    onApply({
      image,
      zoom,
      positionX,
      positionY,
    });
  };

  return (
    <div className="avatar-editor-overlay">

      <div className="avatar-editor">

        <div className="avatar-editor-header">
          <div>
            <h2>Adjust Your Avatar</h2>
            <p>Position and resize your image to fit your avatar.</p>
          </div>

          <button
            type="button"
            className="avatar-editor-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="avatar-preview-wrapper">
          <div className="avatar-preview">
            {image ? (
              <img
                src={image}
                alt="Avatar preview"
                style={{
                  transform: `scale(${zoom})`,
                  objectPosition: `${positionX}% ${positionY}%`,
                }}
              />
            ) : (
              <span>JD</span>
            )}
          </div>
        </div>

        <div className="avatar-controls">

          <div className="avatar-control">
            <div className="control-label">
              <label htmlFor="avatarZoom">Zoom</label>
              <span>{Math.round(zoom * 100)}%</span>
            </div>

            <input
              type="range"
              id="avatarZoom"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(event) => setZoom(Number(event.target.value))}
            />
          </div>

          <div className="avatar-control">
            <div className="control-label">
              <label htmlFor="avatarPositionX">Horizontal Position</label>
              <span>{positionX}%</span>
            </div>

            <input
              type="range"
              id="avatarPositionX"
              min="0"
              max="100"
              value={positionX}
              onChange={(event) => setPositionX(Number(event.target.value))}
            />
          </div>

          <div className="avatar-control">
            <div className="control-label">
              <label htmlFor="avatarPositionY">Vertical Position</label>
              <span>{positionY}%</span>
            </div>

            <input
              type="range"
              id="avatarPositionY"
              min="0"
              max="100"
              value={positionY}
              onChange={(event) => setPositionY(Number(event.target.value))}
            />
          </div>

        </div>

        <div className="avatar-editor-actions">

          <button
            type="button"
            className="remove-avatar-button"
            onClick={onRemove}
          >
            Remove Avatar
          </button>

          <div className="avatar-editor-right-actions">

            <button
              type="button"
              className="cancel-avatar-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="button"
              className="apply-avatar-button"
              onClick={handleApply}
            >
              Apply
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AvatarEditor;