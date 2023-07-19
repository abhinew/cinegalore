import React from "react";

const MoviePreview = ({ selectedMovie }) => {

  const base_path = "https://image.tmdb.org/t/p/w500"
  return (
    <div>
      <h3>{selectedMovie.title}</h3>
      <p>Rating: {selectedMovie.vote_count}</p>
      <div>
        <img
          src={`${base_path}` + selectedMovie.poster_path}
          alt={selectedMovie.title}
          className="thumbnail"
        />
      </div>
    </div>
  );
};

export default MoviePreview;

