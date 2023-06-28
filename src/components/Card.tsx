import React from "react";
import { TMovie } from "@/types/TMovie";

interface CardProps {
  movie: TMovie;
  onClick: () => void;
  bgColor: string;
}

const Card = ({ movie, onClick, bgColor }: CardProps) => {
  return (
    <div className="container" onClick={onClick}>
      <div key={movie.id} className="card" style={{ backgroundColor: bgColor }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="details">
          <div className="title">{movie.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
