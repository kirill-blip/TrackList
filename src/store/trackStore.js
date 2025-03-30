import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTrackStore = create(
  persist(
    (set) => ({
      tracks: [],
      addTrack: (newTrack) =>
        set((state) => ({ tracks: [...state.tracks, newTrack] })),
      removeTrack: (trackId) =>
        set((state) => ({
          tracks: state.tracks.filter((track) => track.id !== trackId),
        })),
    }),
    {
      name: "track-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useTrackStore;
