import React, { useState } from "react";
import AddTrackForm from "./components/AddTrackForm";
import useTrackStore from "./store/trackStore";
import Header from "./components/Header";
import FilterControls from "./components/FilterControls";
import Footer from "./components/Footer";
import "./App.css";
import TrackItem from "./components/TrackItem";

function App() {
  const tracks = useTrackStore((state) => state.tracks);
  const addTrack = useTrackStore((state) => state.addTrack);
  const removeTrack = useTrackStore((state) => state.removeTrack);

  const [filterGenre, setFilterGenre] = useState("");
  const [filterArtist, setFilterArtist] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredAndSortedTracks = tracks
    .filter((track) => track)
    .filter(
      (track) =>
        (!filterGenre || track.genre === filterGenre) &&
        (!filterArtist || track.artist === filterArtist)
    )
    .sort((a, b) => {
      if (!sortBy) return 0;
      return a[sortBy].localeCompare(b[sortBy]);
    });
  return (
    <div>
      <Header />
      <AddTrackForm onAddTrack={addTrack} />
      <FilterControls
        filterGenre={filterGenre}
        setFilterGenre={setFilterGenre}
        filterArtist={filterArtist}
        setFilterArtist={setFilterArtist}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {filteredAndSortedTracks.map((track, index) => (
        <TrackItem key={index} track={track} onRemove={removeTrack} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
