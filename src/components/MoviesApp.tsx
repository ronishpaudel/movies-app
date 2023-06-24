import React, { useState } from "react";
import { Card } from "./Card";
import { useMovieSearch } from "@/API/useMovieSearch";
import { PopularMovieList } from "./PopularMovieList";
import { useDebounce } from "@/hooks/useDebounce";

const MoviesApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { data } = useMovieSearch(debouncedSearchQuery);

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
          data.map((movie, index) => <Card key={index} movie={movie} />)
        ) : (
          <PopularMovieList />
        )}
      </main>
      <footer></footer>
    </>
  );
};

export { MoviesApp };
