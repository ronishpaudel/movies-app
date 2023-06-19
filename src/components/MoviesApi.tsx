import PopularMovies from "@/details/PopularMovies";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import React from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MoviesApi = () => {
  const [movies, setMovies] = useState("");

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      return response.data.results;
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error Detected");
      }
    }
  };

  const { data, refetch } = useQuery<Movie[], Error>({
    queryKey: ["moviesApi", movies],
    queryFn: fetchMovieData,
    enabled: true,
    retry: false,
    onError: (e: Error) => {
      console.log(e.message);
    },
  });

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <div className="logo">RMDb</div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search movies..."
              value={movies}
              onChange={(e) => setMovies(e.target.value)}
              className="search-input"
            />
            <button
              type="submit"
              disabled={!movies}
              onClick={() => refetch()}
              className="search-button"
            >
              Search
            </button>
          </div>
        </div>
        <div className="options-container">
          <button className="sign-in-button">Sign In</button>
        </div>
      </header>
      <main>
        <div className="popular-section">
          <strong className="Popular">Popular Movies</strong>
          <PopularMovies />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default MoviesApi;
