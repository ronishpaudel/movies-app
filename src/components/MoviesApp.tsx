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

  const { data } = useMovieSearch(debouncedSearchQuery);
  const { data: popularMoviesData } = usePopularMovies();

  const router = useRouter();

  const [bgColor, setBgColor] = useState("");

  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

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
        <ColorPalette onClick={handleColorChange} />
      </header>
      <main>
        {data?.length ? (
          data.map((movie, index) => (
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
              bgColor={bgColor}
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
                    bgColor={bgColor}
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
