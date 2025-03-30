import React from "react";
import "./FilterControls.css";

function FilterControls({
  filterGenre,
  setFilterGenre,
  filterArtist,
  setFilterArtist,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="container">
      <label className="label">
        <span className="text">Filter by Genre:</span>
        <input
          className="input"
          type="text"
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        />
      </label>
      <label className="label">
        <span className="text">Filter by Artist:</span>
        <input
          className="input"
          type="text"
          value={filterArtist}
          onChange={(e) => setFilterArtist(e.target.value)}
        />
      </label>
      <label className="label">
        <span className="text">Sort by:</span>
        <select className="input" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="trackName">Track Name</option>
          <option value="artist">Artist</option>
          <option value="genre">Genre</option>
        </select>
      </label>
    </div>
  );
}

export default FilterControls;
