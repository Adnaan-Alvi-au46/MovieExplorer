import React, { useState } from "react";
import { useGeneralStore } from "../../store/useGeneralStore";
import "./SortDropdown.css";

function SortDropdown() {
  const { movies, setMovies, sortOrder, setSortOrder } = useGeneralStore();

  const handleSort = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.release_date) - new Date(b.release_date)
        : new Date(b.release_date) - new Date(a.release_date);
    });
    setMovies(sortedMovies);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="sort-dropdown">
      <button onClick={handleSort}>Sort by Release Date ({sortOrder})</button>
    </div>
  );
}

export default SortDropdown;
