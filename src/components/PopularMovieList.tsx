import React from "react";
import { usePopularMovies } from "@/API/usePopularMovies";
import { Card } from "./Card";

const PopularMovieList = () => {
  const { data } = usePopularMovies();

  return (
    <div className="container">
      {data &&
        data.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            onClick={() => console.log("card click")}
          />
        ))}
    </div>
  );
};

export { PopularMovieList };
