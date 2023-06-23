import { usePopularMovies } from "@/API/usePopularMovies";
import { TMovie } from "@/types/Tmovie";

const PopularMovieList = () => {
  const { data } = usePopularMovies();

  return (
    <div className="container">
      {data &&
        data.map((movie: TMovie) => (
          <div key={movie.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="poster"
            />
            <div className="details">
              <div className="title">{movie.title}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export { PopularMovieList };
