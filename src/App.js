import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { useGeneralStore } from "./store/useGeneralStore";
import useApi from "./config/useApi";
import Navbar from "./components/Navbar/Navbar";
import FavoriteMovies from "./components/FavoriteMovies/FavoriteMovies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import "./App.css";

function App() {
  const { darkMode } = useGeneralStore();
  const { fetchTrendingMovies, loading, error } = useApi();

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home loading={loading} error={error} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
