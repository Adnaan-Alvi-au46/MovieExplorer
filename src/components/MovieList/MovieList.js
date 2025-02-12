import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";
import { useGeneralStore } from "../../store/useGeneralStore";

function MovieList() {
  const { favorites, setFavorites, movies } = useGeneralStore();

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
    <div className="movie-list">
      {movies?.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
          <button
            className="favorite-btn"
            onClick={() => handleAddToFavorites(movie)}
          >
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
