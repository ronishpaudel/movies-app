import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const MoviesApi = () => {
  const [movies, setMovies] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=6f32a2f9&t=${encodeURIComponent(
          movies
        )}`
      );
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error Detected");
      }
    }
  };

  const { data, refetch } = useQuery({
    queryKey: ["moviesApi", movies],
    queryFn: fetchMovieData,
    enabled: false,
    retry: false,
    onError: (e: Error) => {
      console.log(e.message);
    },
  });

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

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
        <div className="user-menu">
          <button className="menu-toggle" onClick={toggleMenu}>
            Menu
          </button>
          {!isLoggedIn && (
            <button className="sign-in-button" onClick={handleSignIn}>
              Sign In
            </button>
          )}
          {showMenu && (
            <ul className="menu-list">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      </header>
      <main>
        {data && movies !== "" && (
          <div>
            <div>{data.Title}</div>
            <div>{data.Year}</div>
            <div>{data.Actors}</div>
            <div>{data.imdbRatings}</div>
            <div>{data.BoxOffice}</div>
            {isLoggedIn && <button>Add to Watchlist</button>}
          </div>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default MoviesApi;
