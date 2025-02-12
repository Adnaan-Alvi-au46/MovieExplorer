// import React from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortDropdown from "../../components/SortDropdown/SortDropdown";

function Home({ loading, error }) {
  return (
    <div>
      <SearchBar />
      <SortDropdown />
      {loading && <Loader />}
      {error && (
        <p>
          <ErrorMessage message={error} />
        </p>
      )}
      <MovieList />
    </div>
  );
}

export default Home;
