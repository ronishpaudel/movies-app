import { useState } from "react";
import { useMovieSearch } from "@/API/useMovieSearch";
import { useDebounce } from "@/hooks/useDebounce";
import { usePopularMovies } from "@/API/usePopularMovies";
import { useRouter } from "next/router";
import Card from "./Card";
import { ColorPalette } from "./ColorPalette";

const MoviesApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { data: movieId } = useMovieSearch(debouncedSearchQuery);
  const { data: popularMoviesData } = usePopularMovies();

  const router = useRouter();

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <div className="logo">RMDb</div>
        </div>
        <input
          className="input"
          placeholder="Search movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ColorPalette />
      </header>
      <main>
        {movieId?.length ? (
          movieId.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
              onClick={() =>
                router.push({
                  pathname: "/detail/[id]",
                  query: {
                    id: movie.id,
                    title: movie.title,
                    poster: movie.poster_path,
                    overview: movie.overview,
                    rating: movie.popularity,
                  },
                })
              }
            />
          ))
        ) : (
          <>
            {popularMoviesData && (
              <div className="container">
                {popularMoviesData.map((movie) => (
                  <Card
                    key={movie.id}
                    movie={movie}
                    onClick={() =>
                      router.push({
                        pathname: "/detail/[id]",
                        query: {
                          id: movie.id,
                          title: movie.title,
                          poster: movie.poster_path,
                          overview: movie.overview,
                          rating: movie.popularity,
                        },
                      })
                    }
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export { MoviesApp };
