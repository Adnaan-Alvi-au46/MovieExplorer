import React, { useEffect, useState } from "react";
import { useGeneralStore } from "../../store/useGeneralStore";
import useApi from "../../config/useApi";
import "./SearchBar.css";

function SearchBar() {
  const { query, setQuery } = useGeneralStore();
  const { fetchMoviesByQuery, fetchTrendingMovies } = useApi();
  const handleSearchChange = (e) => {
    if (e.target.value?.trim() === "") {
      fetchTrendingMovies();
      setQuery("");
    } else {
      setQuery(e.target.value);
    }
  };
  const handleSearch = async () => {
    fetchMoviesByQuery(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
