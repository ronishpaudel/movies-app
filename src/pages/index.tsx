import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Index = () => {
  const [movies, setMovies] = useState("");

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

  const { isFetching, data, refetch } = useQuery({
    queryKey: ["moviesApi", movies],
    queryFn: fetchMovieData,
    enabled: false,
    retry: false,
    onError: (e: Error) => {
      console.log(e.message);
    },
  });

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter movie name"
          value={movies}
          onChange={(e) => setMovies(e.target.value)}
        />
        <button type="submit" disabled={!movies} onClick={() => refetch()}>
          Search
        </button>
        {data && movies !== "" && (
          <div>
            <div>{data.Title}</div>
            <div>{data.Year}</div>
            <div>{data.Actors}</div>
            <div>{data.imdbRating}</div>
            <div> {data.BoxOffice}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
