import React from "react";
import "./Movie.css";

function Movie() {
  return (
    <div>
      <MoviePoster />
      <h1>hello. this is a movie</h1>;
    </div>
  );
}

function MoviePoster() {
  return <img src="https://t1.daumcdn.net/cfile/2679604F525F7D4B20" />;
}

export default Movie;
