import React from "react";
import { TMovie } from "@/types/TMovie";
import { useSnapshot } from "valtio";
import { COLOR_PALETTE, colorPaletteStore } from "@/store/colorPalette.store";

interface CardProps {
  movie: TMovie;
  onClick: () => void;
}

const Card = ({ movie, onClick }: CardProps) => {
  const colorPaletteSnap = useSnapshot(colorPaletteStore);

  return (
    <div className="container" onClick={onClick}>
      <div
        key={movie.id}
        className="card"
        style={{ backgroundColor: COLOR_PALETTE[colorPaletteSnap.color] }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="details">
          {COLOR_PALETTE[colorPaletteSnap.color] ? (
            <div style={{ color: "white" }} className="title">
              {movie.title}
            </div>
          ) : (
            <div style={{ color: "black" }} className="title">
              {movie.title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
