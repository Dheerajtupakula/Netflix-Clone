import { useEffect, useState } from "react";
import React from "react";
import MovieApi from "./MovieApi";
import "./Banner.css";

function Banner() {
  const imgs = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(MovieApi.movies)
      .then((res) => res.json())
      .then((data) =>
        setMovie(data.results[Math.floor(Math.random() * data.results.length)])
      );
  }, []);

  function disCut(overview, num) {
    return overview?.length > num
      ? overview.substr(0, num - 1) + "..."
      : overview;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imgs}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <div className="banner-title">{movie.title}</div>
        <div className="banner-btns">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <div className="banner-dis">{disCut(movie.overview, 150)}</div>
        <div className="banner-shadow"></div>
      </div>
    </header>
  );
}

export default Banner;
