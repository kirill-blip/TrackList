import React, { useState } from "react";
import "./AddTrackForm.css"

function AddTrackForm({ onAddTrack }) {
  const [trackName, setTrackName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackName && artist && genre) {
      const newTrack = {
        id: Date.now(),
        trackName,
        artist,
        genre,
      };
      onAddTrack(newTrack);
      setTrackName("");
      setArtist("");
      setGenre("");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Track Name"
          value={trackName}
          onChange={(e) => setTrackName(e.target.value)}
        />
        <input
        className="input"
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
        className="input"
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button className="sumbit-button" type="submit">Add Track</button>
      </form>
    </div>
  );
}

export default AddTrackForm;
