import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../config/useApi";
import { useGeneralStore } from "../../store/useGeneralStore";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const { favorites, setFavorites, moviesById, setMoviesById } =
    useGeneralStore();
  const { fetchMovieById, loading, error } = useApi();

  useEffect(() => {
    fetchMovieById(id);
  }, [id]);

  if (loading) return <Loader />;
  if (!moviesById) return <ErrorMessage message={error} />;

  const handleAddToFavorites = (movie) => {
    const isFavorite =
      favorites?.length > 0
        ? favorites.some((fav) => fav.id === movie.id)
        : false;

    if (!isFavorite) {
      setFavorites([...favorites, movie]);
      alert("Added to Favorites!");
    } else {
      alert("Already in Favorites!");
    }
  };

  return (
    <div className="movie-details">
      <h2 className="movie-title">{moviesById?.title}</h2>
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${moviesById?.poster_path}`}
        alt={moviesById?.title}
      />
      <p className="movie-overview">{moviesById?.overview}</p>
      <p className="movie-release-date">
        Release Date: {moviesById?.release_date}
      </p>
      <button
        onClick={() => handleAddToFavorites(moviesById)}
        className="add-favorite"
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default MovieDetails;
