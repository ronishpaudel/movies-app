import { COLOR_PALETTE, colorPaletteStore } from "@/store/colorPalette.store";
import { useRouter } from "next/router";
import React from "react";
import { useSnapshot } from "valtio";

const MovieDetails = () => {
  const { query, back } = useRouter();
  const colorPaletteSnap = useSnapshot(colorPaletteStore);
  return (
    <div className="movie-details-container">
      <div
        className="movie-details-content"
        style={{
          boxShadow: `0 2px 4px ${COLOR_PALETTE[colorPaletteSnap.color]}`,
        }}
      >
        <div className="movie-details-header">
          <h2
            className="movie-details-title"
            style={{ color: COLOR_PALETTE[colorPaletteSnap.color] }}
          >
            {query.title}
          </h2>
          <button
            className="movie-details-button"
            onClick={back}
            style={{ backgroundColor: COLOR_PALETTE[colorPaletteSnap.color] }}
          >
            Go Back
          </button>
        </div>
        <div className="movie-details-body">
          <div className="movie-details-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500/${query.poster} `}
              alt="Movie Poster"
            />
          </div>
          <div className="movie-details-info">
            <div className="movie-details-overview">
              <h2 style={{ color: COLOR_PALETTE[colorPaletteSnap.color] }}>
                Overview
              </h2>
              <p style={{ color: COLOR_PALETTE[colorPaletteSnap.color] }}>
                {query.overview}
              </p>
            </div>
            <div
              className="movie-details-id"
              style={{ color: COLOR_PALETTE[colorPaletteSnap.color] }}
            >
              <strong>ID:</strong> {query.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
