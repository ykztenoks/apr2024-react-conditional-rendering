// src/components/ImprovedMovieList.jsx

import { useState } from "react";
import moviesData from "../movies.json";
import ImprovedMovieCard from "./ImprovedMovieCard";

function ImprovedMovieList() {
  const [movies, setMovies] = useState(moviesData);
  // Declare a new state variable, which we'll call "showMovies"
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };

  return (
    <div>
      <h2>Improved Movie List</h2>

      <button onClick={toggleShowMovies}>{showMovies ? "Hide" : "Show"}</button>

      {showMovies &&
        movies.map((movie) => {
          return (
            <ImprovedMovieCard
              key={movie._id}
              movie={movie}
              clickToDelete={deleteMovie}
            />
          );
        })}
    </div>
  );
}

export default ImprovedMovieList;
