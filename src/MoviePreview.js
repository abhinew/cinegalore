import React from "react";

const MoviePreview = ({ selectedMovie }) => {

  return (
    <div>
      <h3>{selectedMovie.name}</h3>
      <p>Rating: {selectedMovie.rating}</p>
      <div>
        <img
          src={selectedMovie.url}
          alt={selectedMovie.name}
          className="thumbnail"
        />
      </div>
    </div>
  );
};

export default MoviePreview;

