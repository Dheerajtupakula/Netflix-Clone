import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ content, title, isLargeRow }) {
  const imgs = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    function getMovies() {
      fetch(content)
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    }

    getMovies();
  }, [content]);

  return (
    <div className="row">
      <div className=" row-title">{title}</div>
      <div className="row-movies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-movie ${isLargeRow && "is-large"}`}
            src={`${imgs}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
