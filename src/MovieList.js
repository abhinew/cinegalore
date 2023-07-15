import React, { useState, useCallback, useEffect } from "react";
import MoviePreview from "./MoviePreview";

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(0);

  // const onClick = useCallback(item => setSelectedMovie(item), []);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated')
      .then(res => console.log(res.data));

  }, [])

  return (
    <div>
      <h1>Top trending movies to watch today!</h1>
      <ol>
        {/* {moviesList.map((movie) => (
          <li
            className={`movie-name ${movie.movieId === selectedMovie.movieId ? "active" : ""}`}
            key={movie.movieId}
            onClick={() => onClick(movie)}
          >
            {movie.name}
          </li>
        ))} */}
      </ol>

      <MoviePreview selectedMovie={selectedMovie} />
    </div>
  );
};

export default MovieList;
