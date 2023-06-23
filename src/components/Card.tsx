import { TMovie } from "@/types/Tmovie";

interface CardProps {
  movie: TMovie;
}

const Card = ({ movie }: CardProps) => {
  return (
    <div className="container">
      <div key={movie.id} className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="details">
          <div className="title">{movie.title}</div>
          <div className="release-date">Release Date: {movie.release_date}</div>
        </div>
      </div>
    </div>
  );
};

export { Card };
