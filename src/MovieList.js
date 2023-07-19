import React, { useState, useCallback, useEffect } from "react";
import MoviePreview from "./MoviePreview";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(0);

  const onClick = useCallback(item => setSelectedMovie(item), []);



  useEffect(() => {
    // Fetch the list of movies
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0156f1cd98963b6bba44ab04c5d5a120')
      .then(response => response.json())
      .then(data => {

        console.log(data.results);
        setMovies(data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);




  return (
    <div>
      <h1>Top trending movies to watch today!</h1>
      <ol>
        {movies.map((movie) => (
          <li
            className={`movie-name ${movie.id === selectedMovie.id ? "active" : ""}`}
            key={movie.id}
            onClick={() => onClick(movie)}
          >
            {movie.title}
          </li>
        ))}
      </ol>

      <MoviePreview selectedMovie={selectedMovie} />
    </div>
  );
};

export default MovieList;
