import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useGeneralStore = create(
  persist(
    (set, get) => ({
      movies: [],
      moviesById: null,
      query: "",
      favorites: [],
      sortOrder: "asc",
      darkMode: false,

      setMovies: (payload) => {
        set((state) => ({
          ...state,
          movies: payload,
        }));
      },
      setMoviesById: (payload) => {
        set((state) => ({
          ...state,
          moviesById: payload,
        }));
      },
      setQuery: (payload) => {
        set((state) => ({
          ...state,
          query: payload,
        }));
      },
      setSortOrder: (payload) => {
        set((state) => ({
          ...state,
          sortOrder: payload,
        }));
      },
      setFavorites: (payload) => {
        set((state) => ({
          ...state,
          favorites: payload,
        }));
      },
      setDarkMode: (payload) => {
        set((state) => ({
          ...state,
          darkMode: payload,
        }));
      },

      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "generalStore",
      partialize: (state) => ({ favorites: state.favorites }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);
