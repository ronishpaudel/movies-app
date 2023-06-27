import React, { useState } from "react";
import { Card } from "./Card";
import { useMovieSearch } from "@/API/useMovieSearch";
import { useDebounce } from "@/hooks/useDebounce";
import { usePopularMovies } from "@/API/usePopularMovies";
import { useRouter } from "next/router";

const PopularMovieList = () => {
  const { data } = usePopularMovies();
  const router = useRouter();
  return (
    <div className="container">
      {data &&
        data.map((movie) => (
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
  );
};

const MoviesApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { data } = useMovieSearch(debouncedSearchQuery);

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
            />
          ))
        ) : (
          <PopularMovieList />
        )}
      </main>
      <footer></footer>
    </>
  );
};

export { MoviesApp };
