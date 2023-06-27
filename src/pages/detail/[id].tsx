import { useRouter } from "next/router";
import React from "react";

const MovieDetails = () => {
  const { query, back } = useRouter();

  return (
    <div className="movie-details-container">
      <div className="movie-details-content">
        <div className="movie-details-header">
          <h2 className="movie-details-title">{query.title}</h2>
          <button className="movie-details-button" onClick={back}>
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
              <h2>Overview</h2>
              <p>{query.overview}</p>
            </div>
            <div className="movie-details-id">
              <strong>ID:</strong> {query.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
