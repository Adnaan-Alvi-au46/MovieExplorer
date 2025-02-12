import { useState } from "react";
import axios from "axios";
import { useGeneralStore } from "../store/useGeneralStore";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movies, setMovies, moviesById, setMoviesById } = useGeneralStore();

  //  Fetch movies by search query
  const fetchMoviesByQuery = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );

      if (response?.data?.results?.length > 0) {
        setMovies(response?.data?.results);
        setError(null);
      } else {
        alert("Invalid Input");
      }
    } catch (err) {
      setMovies([]);
      setError("Error fetching search results");
      console.error(err);
    }
    setLoading(false);
  };

  //  Fetch movie details by ID
  const fetchMovieById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/movie/${id}?api_key=${API_KEY}`
      );
      setError(null);

      setMoviesById(response.data);
    } catch (err) {
      setMoviesById(null);
      setError("Error fetching movie details");
      console.error(err);
    }
    setLoading(false);
  };

  //  Fetch trending movies
  const fetchTrendingMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/trending/movie/week?api_key=${API_KEY}`
      );
      setError(null);

      setMovies(response.data.results);
    } catch (err) {
      setMovies([]);
      setError("Failed to fetch trending movies. Please try again later.");
      console.error(err);
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    fetchMoviesByQuery,
    fetchMovieById,
    fetchTrendingMovies,
  };
};

export default useApi;
