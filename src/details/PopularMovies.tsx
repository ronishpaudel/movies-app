import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

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

const PopularMovies = () => {
  const { data } = useQuery<Movie[], Error>({
    queryKey: ["moviesApi"],
    queryFn: fetchMovieData,
    enabled: true,
    retry: false,
    onError: (e: Error) => {
      console.log(e.message);
    },
  });
  return (
    <>
      <div className="popular-movies">
        {data && (
          <div className="movie-container">
            {data.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-details">
                  <div className="movie-title">{movie.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PopularMovies;
