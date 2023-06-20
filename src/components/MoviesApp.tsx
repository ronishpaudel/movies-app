import { useMovies } from "@/API/useMovie";
import React from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

const MoviesApp = () => {
  const { data } = useMovies();

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <div className="logo">RMDb</div>
        </div>
        <div className="options-container">
          <button className="sign-in-button">Sign In</button>
        </div>
      </header>
      <main>
        <div>
          <strong className="Upcoming">Upcoming Movies</strong>
          <div className="trending-movies">
            {data && (
              <div className="movie-container">
                {data.map((movie: Movie) => (
                  <div key={movie.id} className="movie-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-poster"
                    />
                    <div className="movie-details">
                      <div className="movie-title">{movie.title}</div>
                      <div className="movie-release-date">
                        Release Date: {movie.release_date}
                      </div>
                      <div className="movie-overview">{movie.overview}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <strong className="Popular">Popular Movies</strong>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export { MoviesApp };
