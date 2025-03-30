import "./TrackItem.css";

function TrackItem({ track, onRemove }) {
  return (
    <div className="container track-item">
      <span className="track-item-title">{track.trackName} </span>
      <span className="track-item-text">Artist: {track.artist} </span>
      <span className="track-item-text">Genre: {track.genre}</span>
      <button className="remove-button" onClick={() => onRemove(track.id)}>Remove</button>
    </div>
  );
}

export default TrackItem;
