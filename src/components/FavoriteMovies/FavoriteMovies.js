import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavoriteMovies.css";
import { useGeneralStore } from "../../store/useGeneralStore";

function FavoriteMovies() {
  const { favorites, setFavorites } = useGeneralStore();

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="wrapper">
      <div className="favorites-container">
        <h2 className="favorites-title">Favorite Movies</h2>
        {favorites.length === 0 ? (
          <p className="no-favorites">No favorite movies added yet.</p>
        ) : (
          <div className="movie-list-fav">
            {favorites.map((movie) => (
              <div key={movie.id} className="movie-card-fav">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <h3 className="movie-title">{movie.title}</h3>
                </Link>
                <button
                  className="remove-btn"
                  onClick={() => removeFavorite(movie.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteMovies;
